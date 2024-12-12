import { useState, useCallback } from 'react';
import { colord, HslaColor } from 'colord';

export function useColor(initialColor = '#FFFFFF') {
  const [color, setColor] = useState(initialColor);
  const [saturation, setSaturation] = useState(0);
  const [lightness, setLightness] = useState(100);
  const [hue, setHue] = useState(0);

  const handleColorChange = useCallback((newColor: string) => {
    const colorObj = colord(newColor);
    const { h, s, l } = colorObj.toHsl();
    setColor(newColor);
    setHue(h);
    setSaturation(s);
    setLightness(l);
  }, []);

  const updateColorFromHSL = useCallback((h: number, s: number, l: number) => {
    const newColor = colord({ h, s, l }).toHex();
    setColor(newColor);
    setHue(h);
    setSaturation(s);
    setLightness(l);
    return newColor;
  }, []);

  return {
    color,
    setColor: handleColorChange,
    hue,
    saturation,
    lightness,
    setSaturation: (s: number) => updateColorFromHSL(hue, s, lightness),
    setLightness: (l: number) => updateColorFromHSL(hue, saturation, l)
  };
}