import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';
import { ColorSwatches } from './color-picker/ColorSwatches';
import { ColorWheel } from './color-picker/ColorWheel';
import { ColorAdjuster } from './color-picker/ColorAdjuster';
import { useColor } from '../hooks/useColor';

interface ColorPickerProps {
  onColorChange: (color: string) => void;
}

export function ColorPicker({ onColorChange }: ColorPickerProps) {
  const {
    color,
    setColor,
    saturation,
    setSaturation,
    lightness,
    setLightness
  } = useColor();

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    onColorChange(newColor);
  };

  const handleSaturationChange = (value: number) => {
    const newColor = setSaturation(value);
    onColorChange(newColor);
  };

  const handleLightnessChange = (value: number) => {
    const newColor = setLightness(value);
    onColorChange(newColor);
  };

  return (
    <div className="w-full max-w-md p-4">
      <Tabs defaultValue="swatches">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="swatches">Color Swatches</TabsTrigger>
          <TabsTrigger value="wheel">Color Wheel</TabsTrigger>
        </TabsList>
        
        <TabsContent value="swatches">
          <ColorSwatches onColorSelect={handleColorChange} />
        </TabsContent>
        
        <TabsContent value="wheel">
          <ColorWheel onColorSelect={handleColorChange} />
        </TabsContent>

        <div className="mt-6">
          <ColorAdjuster
            saturation={saturation}
            lightness={lightness}
            onSaturationChange={handleSaturationChange}
            onLightnessChange={handleLightnessChange}
          />
        </div>
      </Tabs>
    </div>
  );
}