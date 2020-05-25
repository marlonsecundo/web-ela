function hexToRGB(hexColor: string, alpha: string): string {
  const hex = hexColor.replace('#', '');

  const r = parseInt(
    hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2),
    16
  );
  const g = parseInt(
    hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4),
    16
  );
  const b = parseInt(
    hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6),
    16
  );

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
}

export default {
  background: '#F6C56B',
  primary: '#FFFFFF',
  highlight: '#005083',
  portalBar: '#E1E1E1',
  hexToRGB,
};
