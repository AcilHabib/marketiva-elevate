import { readFileSync } from "fs";
import { resolve } from "path";

for (const line of readFileSync(resolve(".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m) process.env[m[1].trim()] = m[2].trim();
}

async function main() {
  const { seedAdminContentIfEmpty, getAdminContent } = await import("../src/lib/admin-data");
  const seed = await seedAdminContentIfEmpty();
  console.log("seed:", seed);
  const content = await getAdminContent();
  console.log({
    projects: content.projects.length,
    brands: content.brands.length,
    testimonials: content.testimonials.length,
    staff: content.staff.length,
    subcategories: content.subcategories.length,
  });
}

main().then(() => process.exit(0)).catch((err) => {
  console.error(err);
  process.exit(1);
});
