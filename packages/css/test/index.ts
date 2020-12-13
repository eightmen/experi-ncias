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
    },
    primary: {
      p: 3,
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      borderRadius: 2,
    },
    size: {
      size: '100%',
      bg: 'primary',
    },
    round: {
      variant: 'buttons.size',
      overflow: 'hidden',
      borderRadius: '50%',
    },
  },
  text: {
    caps: {
      fontSize: [1, 2],
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
    title: {
      fontSize: [3, 4],
      letterSpacing: ['-0.01em', '-0.02em'],
    },
  },
  borders: {
    body: '3px solid #000000',
  },
  borderWidths: {
    thin: 1,
  },
  borderStyles: {
    thick: 'solid',
  },
  radii: {
    small: 5,
  },
  opacities: [0, '50%'],
  transitions: {
    standard: '0.3s ease-in-out',
  },
  shadows: {
    card: '5px 5px 15px 5px #000000',
  },
  zIndices: {
    below: -1,
    body: 1,
    nav: 2,
  },
}

test('returns a function', () => {
  const result = css()
  expect(typeof result).toBe('function')
})

test('returns an object', () => {
  const result = css()()
  expect(typeof result).toBe('object')
})

test('returns styles', () => {
  const result = css({
    fontSize: 32,
    color: 'blue',
    borderRadius: 4,
  })()
  expect(result).toEqual({
    fontSize: 32,
    color: 'blue',
    borderRadius: 4,
  })
})

test('returns system props styles', () => {
  const result = css({
    color: 'primary',
    fontSize: [2, 3, 4],
  })({ theme })
  expect(result).toEqual({
    fontSize: 16,
    '@media screen and (min-width: 40em)': {
      fontSize: 24,
    },
    '@media screen and (min-width: 52em)': {
      fontSize: 36,
    },
    color: 'tomato',
  })
})

test('returns nested system props styles', () => {
  const result = css({
    color: 'primary',
    '&:hover': {
      color: 'secondary',
    },
  })({ theme })
  expect(result).toEqual({
    color: 'tomato',
    '&:hover': {
      color: 'cyan',
    },
  })
})

test('returns nested responsive styles', () => {
  const result = css({
    color: 'primary',
    h1: {
      py: [3, 4],
      scrollPaddingY: [2, 4],
    },
  })({ theme })
  expect(result).toEqual({
    