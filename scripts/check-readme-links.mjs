import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const files = ['README.md', 'docs/readme-plan.md'];
const acceptedStatuses = new Set([200, 204, 206, 301, 302, 307, 308, 403, 429]);
const volatileHosts = new Set([
  'github-readme-stats.vercel.app',
  'github-readme-activity-graph.vercel.app',
  'github-profile-trophy.vercel.app',
  'streak-stats.demolab.com',
  'komarev.com',
  't.me',
]);
const urls = new Set();
const errors = [];
const warnings = [];

for (const file of files) {
  const text = readFileSync(join(root, file), 'utf8');

  for (const match of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    urls.add(match[1]);
  }
  for (const match of text.matchAll(/\b(?:href|src|srcset)\s*=\s*["']([^"']+)["']/gi)) {
    for (const part of match[1].split(',').map((item) => item.trim().split(/\s+/)[0])) {
      urls.add(part.replaceAll('&amp;', '&'));
    }
  }
}

async function checkRemote(url) {
  if (/^https:\/\/discord\.com\/users\//i.test(url)) {
    return;
  }

  const host = new URL(url).host;
  const volatile = volatileHosts.has(host);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const headers = { 'User-Agent': 'taeyoon0526-readme-link-check/1.0' };

  try {
    let response = await fetch(url, { method: 'HEAD', headers, signal: controller.signal, redirect: 'follow' });
    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, { method: 'GET', headers, signal: controller.signal, redirect: 'follow' });
    }
    if (!acceptedStatuses.has(response.status)) {
      const message = `${url} returned HTTP ${response.status}`;
      volatile ? warnings.push(message) : errors.push(message);
    }
  } catch (error) {
    const message = `${url} failed link check: ${error.name === 'AbortError' ? 'timeout' : error.message}`;
    volatile ? warnings.push(message) : errors.push(message);
  } finally {
    clearTimeout(timeout);
  }
}

for (const rawUrl of urls) {
  const url = rawUrl.trim();
  if (!url || url.startsWith('#') || url.startsWith('mailto:')) {
    continue;
  }
  if (url.startsWith('./')) {
    const localPath = join(root, url.replace(/^\.\//, ''));
    if (!existsSync(localPath)) {
      errors.push(`Missing local link target: ${url}`);
    }
    continue;
  }
  if (/^https?:\/\//i.test(url)) {
    await checkRemote(url);
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

if (warnings.length) {
  console.warn('Non-blocking volatile external link warnings:');
  console.warn(warnings.map((warning) => `- ${warning}`).join('\n'));
}

console.log(`README link check passed for ${urls.size} discovered links.`);
