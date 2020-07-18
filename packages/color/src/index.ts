import * as P from 'polished'
import { ColorModesScale, get, Theme } from '@theme-ui/css'

type Color = ColorModesScale[string]

/**
 * Get color from theme.colors
 */
export const getColor = (theme: Theme, color: Color) => {
  if (typeof color === 'object') {
    color = Array.isArray(color)
      ? color[0]
      : (color as Exclude<typeof color, string & {}>).__default
  }

  if (process.env.NODE_ENV !== 'production') {
    if (color && /^var\(--theme-ui-colors-(.+)\)$/.test(color)) {
      throw new Error(
        'A CSS property was passed to `getColor`. ' +
          '`theme.colors` contains CSS custom properties. ' +
          'Use `theme.rawColors` instead.'
      )
    }
  }

  return get(
    theme,
    'rawColors' in theme ? `rawColors.${color}` : `colors.${color}`,
    color
  )
}

/**
 * Darken a color by an amount 0–1
 */
export const darken = (c: Color, n: number) => (t: Theme) =>
  P.darken(n, getColor(t, c))
/**
 * Lighten a color by an amount 0–1
 */
export const lighten = (c: Color, n: number) => (t: Theme) =>
  P.lighten(n, getColor(t, c))
/**
 * Rotate the hue of a color by an amount 0–360
 */
export const rotate = (c: Color, d: number) => (t: Theme) =>
  P.adju