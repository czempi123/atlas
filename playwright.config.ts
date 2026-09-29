import { defineConfig, devices } from '@playwright/test';

// Testy běží proti sestavenému webu (npm run build && astro preview), aby fungoval i Pagefind.
// PW_CHROMIUM_PATH umožní použít už nainstalovaný Chromium (např. v uzavřeném prostředí).
const executablePath = process.env.PW_CHROMIUM_PATH || undefined;

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 60_000,
  fullyParallel: true,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : [['list']],
  use: {
    baseURL: 'http://localhost:4321',
    locale: 'cs-CZ',
    launchOptions: { executablePath },
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], launchOptions: { executablePath } } }],
  webServer: {
    command: process.env.PW_BEZ_BUILDU ? 'npx astro preview --port 4321 --ignore-lock' : 'npm run build && npx astro preview --port 4321 --ignore-lock',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
