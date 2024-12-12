import React, { useRef, useEffect, useState } from 'react';
import { colord } from 'colord';

interface ColorWheelProps {
  onColorSelect: (color: string) => void;
}

export function ColorWheel({ onColorSelect }: ColorWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 5;

    for (let angle = 0; angle < 360; angle++) {
      for (let dist = 0; dist < radius; dist++) {
        const x = centerX + dist * Math.cos((angle * Math.PI) / 180);
        const y = centerY + dist * Math.sin((angle * Math.PI) / 180);
        
        const hue = angle;
        const saturation = (dist / radius) * 100;
        const color = colord({ h: hue, s: saturation, l: 50 }).toHex();
        
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }, []);

  const handleColorPick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(x, y, 1, 1).data;
    const color = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
    onColorSelect(colord(color).toHex());
  };

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      className="w-full max-w-[200px] mx-auto cursor-pointer"
      onClick={handleColorPick}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseMove={(e) => isDragging && handleColorPick(e)}
    />
  );
}