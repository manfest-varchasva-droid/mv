import { small0 } from "./chunks/small0";
import { small1 } from "./chunks/small1";
import { small2 } from "./chunks/small2";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const bytes = Buffer.from(small0 + small1 + small2, "base64");

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
