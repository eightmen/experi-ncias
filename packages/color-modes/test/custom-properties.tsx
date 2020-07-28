import {
  toCustomProperties,
  __createColorStyles,
} from '../src/custom-properties'

describe('toCustomProperties', () => {
  test('converts theme object to custom properties', () => {
    const result = toCustomProperties({
      config: {
        initialColorModeName: 'light',
      },
      colors: {
        text: 'black',
      },
      space: [0, 4, 8, 16, 32],
      fonts: {
        body: 'system-ui, sans-serif',
      },
      fontWeights: {
        body: 400,
      },
    })
    expect(result).toEqual({
      config: {
        initialColorModeName: 'light',
      },
      colors: {
        text: 'var(--theme-ui-colors-text)',
      },
      space: [
        'var(--theme-ui-space-0)',
        'var(--theme-ui-space-1)',
        'var(--theme-ui-space-2)',
        'var(--theme-ui-space-3)',
        'var(--theme-ui-space-4)',
      ],
      fonts: {
        body: 'var(--theme-ui-fonts-body)',
      },
      fontWeights: {
        body: 'var(--theme-ui-fontWeights-body)',
      },
    })
  })

  test('handles undefined as first argument', () => {
    const result = toCustomProperties(undefined, 'colors')

    expect(result).toStrictEqual({})
 