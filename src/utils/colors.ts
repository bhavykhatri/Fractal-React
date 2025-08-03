export const colorSchemes = {
  default: ['#000033', '#000055', '#0000ff', '#0055ff', '#00ffff', '#55ff00', '#ffff00', '#ff5500', '#ff0000'],
  rainbow: ['#ff0000', '#ff8000', '#ffff00', '#80ff00', '#00ff00', '#00ff80', '#00ffff', '#0080ff', '#0000ff'],
  grayscale: ['#000000', '#222222', '#444444', '#666666', '#888888', '#aaaaaa', '#cccccc', '#eeeeee', '#ffffff'],
  fire: ['#000000', '#330000', '#660000', '#990000', '#cc0000', '#ff0000', '#ff3300', '#ff6600', '#ff9900']
};

export function getColor(iterations: number, maxIterations: number, scheme: keyof typeof colorSchemes = 'default'): string {
  if (iterations === maxIterations) return '#000000';
  
  const colors = colorSchemes[scheme];
  const ratio = iterations / maxIterations;
  const colorIndex = Math.floor(ratio * (colors.length - 1));
  
  return colors[colorIndex] || colors[0];
}

export function interpolateColor(color1: string, color2: string, factor: number): string {
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);
  
  if (!c1 || !c2) return color1;
  
  const r = Math.round(c1.r + (c2.r - c1.r) * factor);
  const g = Math.round(c1.g + (c2.g - c1.g) * factor);
  const b = Math.round(c1.b + (c2.b - c1.b) * factor);
  
  return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
