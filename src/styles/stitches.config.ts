import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      black_000: 'hsl(0, 0%, 2%)',
      black_100: 'hsl(0, 0%, 12%)',
      black_200: 'hsl(0, 0%, 18%)',
      black_300: 'hsl(0, 0%, 23%)',
      white: 'hsl(0, 0%, 100%)',
      gray_100: 'hsl(0, 0%, 96%)',
      gray_200: 'hsl(0, 0%, 91%)',
      gray_300: 'hsl(0, 0%, 51%)',
      purple: 'hsl(274, 82%, 60%)',
      orange: 'hsl(0, 100%, 66%)',
    },
    fonts: {
      sans_serif: 'Inter, sans-serif',
      serif: 'Lora, serif',
      mono: 'Inconsolata, Menlo',
    },
    fontSizes: {
      sm: '0.875rem',
      base: '1rem',
    },
    space: {
      sm: '0.125rem',
      base: '0.25rem',
    },
    radii: {
      base: '0.5rem',
    },
  },
  media: {
    laptop: '(min-width: 1024px)',
  },
});

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  'html, body': {
    fontFamily: '$sans_serif',
    fontSize: '$base',
    color: '$black_200',
    '-webkit-font-smoothing': 'antialiased',
  },
  '*': {
    boxSizing: 'border-box',
  },
});
