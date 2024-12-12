import React from 'react';

const colorSwatches = [
  '#FF0000', '#FF4D00', '#FF9900', '#FFE600',
  '#CCFF00', '#80FF00', '#33FF00', '#00FF19',
  '#00FF66', '#00FFB3', '#00FFFF', '#00B3FF',
  '#0066FF', '#0019FF', '#3300FF', '#8000FF',
  '#CC00FF', '#FF00E6', '#FF0099', '#FF004D'
];

interface ColorSwatchesProps {
  onColorSelect: (color: string) => void;
}

export function ColorSwatches({ onColorSelect }: ColorSwatchesProps) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {colorSwatches.map((color) => (
        <button
          key={color}
          className="w-12 h-12 rounded-full transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
        />
      ))}
    </div>
  );
}