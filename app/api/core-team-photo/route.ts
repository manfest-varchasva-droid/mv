import c00 from "./chunks/chunk00";
import c01 from "./chunks/chunk01";
import c02 from "./chunks/chunk02";
import c03 from "./chunks/chunk03";
import c04 from "./chunks/chunk04";
import c05 from "./chunks/chunk05";
import c06 from "./chunks/chunk06";
import c07 from "./chunks/chunk07";
import c08 from "./chunks/chunk08";
import c09 from "./chunks/chunk09";
import c10 from "./chunks/chunk10";

export const runtime = "nodejs";

const base64 =
  c00 + c01 + c02 + c03 + c04 + c05 + c06 + c07 + c08 + c09 + c10;

const image = Buffer.from(base64, "base64");

export async function GET() {
  return new Response(image, {
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Length": String(image.length),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
