import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const files = [
  'README.md',
  'docs/readme-plan.md',
  '.github/workflows/snake.yml',
  '.github/workflows/readme-validation.yml',
  '.github/workflows/wakatime.yml',
];

const patterns = [
  ['public raw IPv4 address', /\b(?!(?:10|127|172\.(?:1[6-9]|2\d|3[01])|192\.168)\.)\d{1,3}(?:\.\d{1,3}){3}\b/],
  ['Discord bot token', /\b[MN][A-Za-z\d_-]{23,28}\.[A-Za-z\d_-]{6,7}\.[A-Za-z\d_-]{27,}\b/],
  ['Discord webhook URL', /https:\/\/(?:canary\.|ptb\.)?discord(?:app)?\.com\/api\/webhooks\/\d+\/[A-Za-z0-9_-]+/i],
  ['private key block', /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
  ['database or redis URL assignment', /\b(?:DATABASE_URL|REDIS_URL)\s*[:=]\s*["']?[^"'\s]+/i],
  ['service role or secret assignment', /\b(?:SUPABASE_SERVICE_ROLE_KEY|CLERK_SECRET_KEY|SENTRY_DSN|WEBHOOK_URL|BOT_TOKEN|DISCORD_TOKEN|PRIVATE_KEY)\s*[:=]\s*["']?[A-Za-z0-9_./+=:@-]{16,}/i],
  ['generic API key assignment', /\b[A-Z0-9_]*API_KEY\s*[:=]\s*["']?[A-Za-z0-9_./+=:@-]{24,}/],
];

const findings = [];
for (const file of files) {
  let text;
  try {
    text = readFileSync(join(root, file), 'utf8');
  } catch {
    continue;
  }

  const lines = text.split(/\r?\n/);
  for (const [index, line] of lines.entries()) {
    for (const [name, pattern] of patterns) {
      if (pattern.test(line)) {
        findings.push(`${file}:${index + 1} matched ${name}`);
      }
    }
  }
}

if (findings.length) {
  console.error('Potential secret or private operational detail found:');
  console.error(findings.map((finding) => `- ${finding}`).join('\n'));
  process.exit(1);
}

console.log('README secret/privacy scan passed.');
