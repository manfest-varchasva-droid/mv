import { ImageResponse } from "next/og";

export const alt = "Manfest-Varchasva 2027 at IIM Lucknow";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px 58px",
          color: "#ffffff",
          background:
            "radial-gradient(circle at 12% 12%, rgba(124, 82, 255, 0.38), transparent 34%), radial-gradient(circle at 88% 82%, rgba(255, 83, 104, 0.34), transparent 36%), #070810",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: 5,
              color: "#d7c0ff",
              marginBottom: 28,
            }}
          >
            IIM LUCKNOW&apos;S
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 36,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 76,
                  fontWeight: 900,
                  letterSpacing: -4,
                  lineHeight: 0.94,
                }}
              >
                MANFEST-
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 76,
                  fontWeight: 900,
                  letterSpacing: -4,
                  lineHeight: 0.94,
                  color: "#e36dff",
                }}
              >
                VARCHASVA
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 132,
                fontWeight: 900,
                lineHeight: 0.9,
                color: "#ffffff",
              }}
            >
              2027
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 44,
              fontSize: 27,
              fontWeight: 800,
              letterSpacing: 1.2,
            }}
          >
            ANNUAL BUSINESS, CULTURAL &amp; SPORTS FEST
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 25,
              color: "#b9bbca",
            }}
          >
            5–7 FEBRUARY 2027 · IIM LUCKNOW
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            borderTop: "2px solid rgba(255,255,255,0.14)",
            fontSize: 23,
            color: "#d7d8e2",
          }}
        >
          <div style={{ display: "flex" }}>Where ideas, culture and energy collide.</div>
          <div style={{ display: "flex", color: "#9c9eae", fontSize: 19 }}>
            iiml-manfestvarchasva.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
