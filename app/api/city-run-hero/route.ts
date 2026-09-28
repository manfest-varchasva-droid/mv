import { q70_0 } from "./chunks/q70_0";
import { q70_1 } from "./chunks/q70_1";
import { q70_2 } from "./chunks/q70_2";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const bytes = Buffer.from(q70_0 + q70_1 + q70_2, "base64");

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
