// Dynamic OG image used for sharing the UNLTD deck on social platforms.
// This endpoint returns an image sized 1200×630 with brand colors and title.

import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          color: "white",
          background: "hsl(228, 100%, 60%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        UNLTD — Computational Amplification
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
