import chunk0 from "./chunk0";
import chunk1 from "./chunk1";
import chunk2 from "./chunk2";
import chunk3 from "./chunk3";

export const dynamic = "force-static";

const poster = Buffer.from(`${chunk0}${chunk1}${chunk2}${chunk3}`, "base64");

export async function GET() {
  return new Response(poster, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
