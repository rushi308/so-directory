import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a3a2a",
          color: "#f7f4ef",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        SO
      </div>
    ),
    { ...size },
  );
}