import { css, NestedScaleDict, Theme } from '../src'

const theme: Theme = {
  colors: {
    primary: 'tomato',
    secondary: 'cyan',
    background: 'white',
    text: 'black',
    purple: {
      __default: 'darkviolet',
      100: 'rebeccapurple',
      500: 'darkviolet',
      900: 'violet',
    },
    pink: {
      100: 'mediumvioletred',
      500: 'hotpink',
      900: 'pink',
    },
  },
  fontSizes: [12, 14, 16, 24, 36],
  fonts: {
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.5,
  },
  fontWeights: {
    bold: 600,
  },
  sizes: {
    small: 4,
    medium: 8,
    large: 16,
    sidebar: 320,
  },
  buttons: {
    __default: {
      px: 4,
      py: 2,
      fontWeight: 'bold',
      color: 'secondary',
      bg: 'background',