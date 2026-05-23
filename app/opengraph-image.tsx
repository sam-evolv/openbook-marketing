import { ImageResponse } from "next/og";

export const alt =
  "OpenBook · Your booking page, live in 15 minutes. Built in Ireland.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const WORDMARK = "OpenBook";
const TAGLINE = "Your booking page, live in 15 minutes.";
const FLAG = "Built in Ireland";

async function loadGoogleFont(
  family: string,
  weight: number,
  text: string
): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family.replace(
      / /g,
      "+"
    )}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const src = css.match(
      /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/
    );
    if (!src) return null;
    const res = await fetch(src[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const [fraunces, inter] = await Promise.all([
    loadGoogleFont("Fraunces", 500, WORDMARK),
    loadGoogleFont("Inter", 400, TAGLINE + FLAG),
  ]);

  const fonts: { name: string; data: ArrayBuffer; weight: 400 | 500; style: "normal" }[] =
    [];
  if (fraunces) fonts.push({ name: "Fraunces", data: fraunces, weight: 500, style: "normal" });
  if (inter) fonts.push({ name: "Inter", data: inter, weight: 400, style: "normal" });

  const display = fraunces ? "Fraunces" : "serif";
  const body = inter ? "Inter" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080808",
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: display,
            fontSize: 130,
            fontWeight: 500,
            color: "#ffffff",
            letterSpacing: "-0.04em",
          }}
        >
          {WORDMARK}
        </div>
        <div
          style={{
            fontFamily: body,
            fontSize: 40,
            color: "rgba(255,255,255,0.78)",
            marginTop: 16,
          }}
        >
          {TAGLINE}
        </div>
        <div
          style={{
            position: "absolute",
            right: 56,
            bottom: 48,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              background: "#D4AF37",
            }}
          />
          <div
            style={{
              fontFamily: body,
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            {FLAG}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined }
  );
}
