// components/ImageBlocks.tsx
import { useState } from "react";

export default function ImageBlocksWrapper() {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const [opacity, setOpacity] = useState<number>(0.6); // Start with 60% opacity

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const image = e.currentTarget as HTMLImageElement;

    // Get the bounding box of the image
    const { left, top, width, height } = image.getBoundingClientRect();

    // Calculate the center of the image
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate mouse position relative to image
    const deltaX = (clientX - centerX) / width;
    const deltaY = (clientY - centerY) / height;

    // Apply a "bend" effect based on the mouse's position
    setTransformStyle(`rotateX(${deltaY * 10}deg) rotateY(${deltaX * -10}deg)`);
    setOpacity(1); // Set opacity to 100% on hover
  };

  const handleMouseLeave = () => {
    // Reset the transform and opacity when the mouse leaves the image
    setTransformStyle("");
    setOpacity(1); // Reset opacity to 60%
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <img
        src="/hero-image.png"
        alt="Hero Image"
        style={{
          width: "500px",
          borderRadius: "10px",
          height: "auto",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.1s ease-out, opacity 0.3s ease-out", // Smooth transition for opacity
          transform: transformStyle,
          opacity: opacity, // Set the opacity based on state
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}
