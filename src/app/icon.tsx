import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 30,
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
