import data0 from "./data0";
import data1 from "./data1";
import data2 from "./data2";
import data3 from "./data3";
import data4 from "./data4";
import data5 from "./data5";
import data6 from "./data6";
import data7 from "./data7";
import data8 from "./data8";
import data9 from "./data9";
import data10 from "./data10";
import data11 from "./data11";
import data12 from "./data12";
import data13 from "./data13";
import data14 from "./data14";
import data15 from "./data15";
import data16 from "./data16";
import data17 from "./data17";
import data18 from "./data18";
import data19 from "./data19";

export const dynamic = "force-static";

const poster = Buffer.from(
  `${data0}${data1}${data2}${data3}${data4}${data5}${data6}${data7}${data8}${data9}${data10}${data11}${data12}${data13}${data14}${data15}${data16}${data17}${data18}${data19}`,
  "base64",
);

export async function GET() {
  return new Response(poster, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
