import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const apiKey = process.env.WAKATIME_API_KEY;
if (!apiKey) {
  console.log('WAKATIME_API_KEY is not configured; skipping README update.');
  process.exit(0);
}

const response = await fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
  headers: {
    Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`,
  },
});

if (!response.ok) {
  throw new Error(`WakaTime API request failed with status ${response.status}`);
}

const payload = await response.json();
const languages = payload?.data?.languages ?? [];
const total = payload?.data?.human_readable_total ?? 'No tracked time';
const generatedAt = new Date().toISOString().slice(0, 10);

const rows = languages
  .slice(0, 6)
  .map((language) => {
    const name = String(language.name ?? 'Unknown').padEnd(16, ' ');
    const time = String(language.text ?? '0 mins').padEnd(14, ' ');
    const percent = `${Math.round(Number(language.percent ?? 0))}%`;
    return `${name}${time}${percent}`;
  })
  .join('\n');

const section = `<!--START_SECTION:waka-->
Last 7 days from WakaTime, generated ${generatedAt}.

\`\`\`text
Total            ${total}
${rows || 'No public language data returned.'}
\`\`\`
<!--END_SECTION:waka-->`;

const readmePath = join(process.cwd(), 'README.md');
const readme = readFileSync(readmePath, 'utf8');
const nextReadme = readme.replace(/<!--START_SECTION:waka-->[\s\S]*?<!--END_SECTION:waka-->/, section);

if (nextReadme === readme) {
  console.log('No WakaTime marker found or no README change needed.');
  process.exit(0);
}

writeFileSync(readmePath, nextReadme);
console.log('Updated README WakaTime section.');
