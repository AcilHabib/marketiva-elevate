import { HomePage } from "@/views/HomePage";
import { getPublicContent } from "@/lib/public-content";

export const dynamic = "force-dynamic";

export default async function Page() {
  const content = await getPublicContent();
  return <HomePage content={content} />;
}
