import { useEffect, useRef } from "react";

const InjectiveLogo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Injective logo (simplified)
    ctx.fillStyle = "#3C3C3C";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw "INJ" text
    ctx.fillStyle = "#00D4FF";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("INJ", canvas.width / 2, canvas.height / 2);

    // Draw border
    ctx.strokeStyle = "#00D4FF";
    ctx.lineWidth = 2;
    ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      className="w-full h-auto"
    />
  );
};

export default InjectiveLogo;
