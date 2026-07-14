import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Klickfunden — Reputation, Sichtbarkeit & Wachstum";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Force Google to serve a TTF (Satori can't read woff2) by sending an old UA.
async function loadFont(text: string) {
  const url = `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600&text=${encodeURIComponent(
    text
  )}`;
  const css = await (
    await fetch(url, { headers: { "User-Agent": "Mozilla/4.0" } })
  ).text();
  const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!src) throw new Error("Font not found");
  return (await fetch(src[1])).arrayBuffer();
}

export default async function OpengraphImage() {
  const title = "Klickfunden";
  const tagline = "Reputation · Sichtbarkeit · Wachstum";
  const font = await loadFont(`${title}${tagline}${site.phoneDisplay}0123456789 ·`);

  const bar = (h: number) => (
    <div
      style={{
        width: 26,
        height: h,
        borderRadius: 8,
        background: "#4df08a",
      }}
    />
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05080a",
          backgroundImage:
            "radial-gradient(600px 600px at 100% 0%, rgba(77,240,138,0.20), transparent 60%)",
          padding: 72,
          fontFamily: "Space Grotesk",
          color: "#eaf2ed",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
          {bar(34)}
          {bar(52)}
          {bar(74)}
          <div style={{ display: "flex", marginLeft: 14, fontSize: 40, fontWeight: 600 }}>
            Klick<span style={{ color: "#4df08a" }}>funden</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {tagline}
          </div>
          <div style={{ fontSize: 30, color: "#8c9a93" }}>
            Für lokale Betriebe — messbar statt Bauchgefühl.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30 }}>
          <div style={{ color: "#4df08a", fontWeight: 600 }}>Per WhatsApp schreiben</div>
          <div style={{ color: "#8c9a93" }}>·</div>
          <div>{site.phoneDisplay}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Space Grotesk", data: font, weight: 600, style: "normal" }],
    }
  );
}
