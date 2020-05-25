import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Montserrat',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Montserrat', 'Georgia', 'serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [],
    },
  ],
  includeNormalize: false,
});

export default typography;
