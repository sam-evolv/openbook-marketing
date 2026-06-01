// Subtracts a flat amount from each RGB channel. Used for the gradient
// "darker" stop on business/app icons across the AI + consumer mockups.
export function darken(hex: string, amount: number) {
  const c = parseInt(hex.slice(1), 16);
  const r = Math.max(0, ((c >> 16) & 255) - amount);
  const g = Math.max(0, ((c >> 8) & 255) - amount);
  const b = Math.max(0, (c & 255) - amount);
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function shade(hex: string, percent: number) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255;
  let g = (n >> 8) & 255;
  let b = n & 255;
  r = Math.max(0, Math.min(255, r + Math.round(2.55 * percent)));
  g = Math.max(0, Math.min(255, g + Math.round(2.55 * percent)));
  b = Math.max(0, Math.min(255, b + Math.round(2.55 * percent)));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
