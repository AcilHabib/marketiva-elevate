/**
 * Ensures generated Nitro wrangler.json includes account_id from wrangler.jsonc.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const rootConfigPath = join(root, "wrangler.jsonc");
const generatedPath = join(root, "dist/server/wrangler.json");

if (!existsSync(generatedPath)) {
  console.warn("[patch-wrangler] dist/server/wrangler.json not found, skipping.");
  process.exit(0);
}

let accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
if (!accountId && existsSync(rootConfigPath)) {
  const raw = readFileSync(rootConfigPath, "utf8").replace(/\/\/.*$/gm, "");
  const match = raw.match(/"account_id"\s*:\s*"([^"]+)"/);
  accountId = match?.[1];
}

if (!accountId) {
  console.warn("[patch-wrangler] No account_id found, skipping.");
  process.exit(0);
}

const wrangler = JSON.parse(readFileSync(generatedPath, "utf8"));
wrangler.account_id = accountId;
writeFileSync(generatedPath, `${JSON.stringify(wrangler, null, 2)}\n`);
console.log(`[patch-wrangler] Set account_id on ${generatedPath}`);
