import React from 'react';
import { Slider } from '../ui/Slider';

interface ColorAdjusterProps {
  saturation: number;
  lightness: number;
  onSaturationChange: (value: number) => void;
  onLightnessChange: (value: number) => void;
}

export function ColorAdjuster({
  saturation,
  lightness,
  onSaturationChange,
  onLightnessChange
}: ColorAdjusterProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Saturation</label>
        <Slider
          value={[saturation]}
          min={0}
          max={100}
          step={1}
          onValueChange={(value) => onSaturationChange(value[0])}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Lightness</label>
        <Slider
          value={[lightness]}
          min={0}
          max={100}
          step={1}
          onValueChange={(value) => onLightnessChange(value[0])}
        />
      </div>
    </div>
  );
}