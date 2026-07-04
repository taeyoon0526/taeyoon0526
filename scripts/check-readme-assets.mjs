import { existsSync, readFileSync } from 'node:fs';
import { extname, join } from 'node:path';

const root = process.cwd();
const readme = readFileSync(join(root, 'README.md'), 'utf8');
const errors = [];

const imgTags = [...readme.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
for (const tag of imgTags) {
  if (!/\balt\s*=\s*["'][^"']+["']/i.test(tag)) {
    errors.push(`README image is missing alt text: ${tag.slice(0, 120)}`);
  }
}

const localRefs = new Set();
for (const match of readme.matchAll(/\b(?:src|srcset)\s*=\s*["']([^"']+)["']/gi)) {
  for (const part of match[1].split(',').map((item) => item.trim().split(/\s+/)[0])) {
    if (part.startsWith('./assets/')) {
      localRefs.add(part.replace(/^\.\//, ''));
    }
  }
}

for (const ref of localRefs) {
  const filePath = join(root, ref);
  if (!existsSync(filePath)) {
    errors.push(`Missing local asset referenced by README: ${ref}`);
    continue;
  }

  if (extname(ref) !== '.svg') {
    continue;
  }

  const svg = readFileSync(filePath, 'utf8');
  const widthMatch = svg.match(/<svg\b[^>]*\bwidth=["']?(\d+)/i);
  const width = widthMatch ? Number(widthMatch[1]) : null;
  if (!width) {
    errors.push(`SVG is missing numeric width: ${ref}`);
  } else if (width > 894) {
    errors.push(`SVG width exceeds 894px: ${ref} (${width}px)`);
  }

  if (/assets\/projects\/(?:qcut|nexi|foram)/.test(ref) && width && width > 430) {
    errors.push(`Project card SVG width exceeds 430px: ${ref} (${width}px)`);
  }

  if (/<script\b/i.test(svg)) {
    errors.push(`SVG contains a script tag: ${ref}`);
  }
  if (/<foreignObject\b/i.test(svg)) {
    errors.push(`SVG contains foreignObject: ${ref}`);
  }
  const generatedSnake = /assets\/widgets\/github-contribution-grid-snake(?:-dark)?\.svg$/.test(ref);
  if (!generatedSnake && (!/<title\b/i.test(svg) || !/<desc\b/i.test(svg))) {
    errors.push(`SVG should include title and desc metadata: ${ref}`);
  }
  if (generatedSnake && !/<desc\b/i.test(svg)) {
    errors.push(`Generated snake SVG should include desc metadata: ${ref}`);
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`README asset check passed for ${localRefs.size} local asset references and ${imgTags.length} image tags.`);
