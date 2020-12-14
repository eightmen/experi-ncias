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
    color: 'tomato',
    h1: {
      paddingTop: 16,
      paddingBottom: 16,
      scrollPaddingBottom: 8,
      scrollPaddingTop: 8,
      '@media screen and (min-width: 40em)': {
        paddingTop: 32,
        paddingBottom: 32,
        scrollPaddingBottom: 32,
        scrollPaddingTop: 32,
      },
    },
  })
})

test('handles all core styled system props', () => {
  const result = css({
    m: 0,
    mb: 2,
    mx: 'auto',
    p: 3,
    py: 4,
    scrollMargin: 5,
    scrollMarginY: 6,
    scrollPadding: 1,
    scrollPaddingY: 2,
    textDecorationColor: 'secondary',
    fontSize: 3,
    fontWeight: 'bold',
    color: 'primary',
    bg: 'secondary',
    opacity: 1,
    transition: 'standard',
    fontFamily: 'monospace',
    lineHeight: 'body',
    border: 'body',
    boxShadow: 'card',
    zIndex: 'nav',
  })({ theme })
  expect(result).toEqual({
    margin: 0,
    marginBottom: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 16,
    paddingTop: 32,
    paddingBottom: 32,
    scrollMargin: 64,
    scrollMarginTop: 128,
    scrollMarginBottom: 128,
    scrollPadding: 4,
    scrollPaddingTop: 8,
    scrollPaddingBottom: 8,
    textDecorationColor: 'cyan',
    color: 'tomato',
    backgroundColor: 'cyan',
    opacity: '50%',
    transition: '0.3s ease-in-out',
    fontFamily: 'Menlo, monospace',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 1.5,
    border: '3px solid #000000',
    boxShadow: '5px 5px 15px 5px #000000',
    zIndex: 2,
  })
})

test('handles css logical properties', () => {
  const result = css({
    borderInlineStartWidth: 'thin',
    borderStartEndRadius: 'small',
    marginInlineStart: 'auto',
    maxBlockSize: 'large',
    paddingInline: 0,
    marginBlockEnd: 2,
  })({ theme })
  expect(result).toEqual({
    borderInlineStartWidth: 1,
    borderStartEndRadius: 5,
    maxBlockSize: 16,
    paddingInline: 0,
    marginBlockEnd: 8,
    marginInlineStart: 'auto',
  })
})

test('works with the css prop', () => {
  const result = css({
    color: 'primary',
    m: 0,
    fontSize: 2,
  })(theme)
  expect(result).toEqual({
    color: 'tomato',
    margin: 0,
    fo