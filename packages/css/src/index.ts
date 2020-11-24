
import type {
  CSSObject,
  ThemeUIStyleObject,
  ThemeDerivedStyles,
  Theme,
  ThemeUICSSObject,
} from './types'

export * from './types'

/**
 * Allows for nested scales with shorthand values
 * @example
 * {
 *   colors: {
 *     primary: { __default: '#00f', light: '#33f' }
 *   }
 * }
 * css({ color: 'primary' }); // { color: '#00f' }
 * css({ color: 'primary.light' }) // { color: '#33f' }
 */
export const THEME_UI_DEFAULT_KEY = '__default'

const hasDefault = (
  x: unknown
): x is { [THEME_UI_DEFAULT_KEY]: string | number } => {
  return typeof x === 'object' && x !== null && THEME_UI_DEFAULT_KEY in x
}

/**
 * Extracts value under path from a deeply nested object.
 * Used for Themes, variants and Theme UI style objects.
 * Given a path to object with `__default` key, returns the value under that key.
 *
 * @param obj a theme, variant or style object
 * @param path path separated with dots (`.`)
 * @param fallback default value returned if get(obj, path) is not found
 */
export function get(
  obj: object,
  path: string | number | undefined,
  fallback?: unknown,
  p?: number,
  undef?: unknown
): any {
  const pathArray = path && typeof path === 'string' ? path.split('.') : [path]
  for (p = 0; p < pathArray.length; p++) {
    obj = obj ? (obj as any)[pathArray[p]!] : undef
  }

  if (obj === undef) return fallback

  return hasDefault(obj) ? obj[THEME_UI_DEFAULT_KEY] : obj
}

export const getObjectWithVariants = (obj: any, theme: Theme): CSSObject => {
  if (obj && obj['variant']) {
    let result: CSSObject = {}
    for (const key in obj) {
      const x = obj[key]
      if (key === 'variant') {
        const val = typeof x === 'function' ? x(theme) : x
        const variant = getObjectWithVariants(get(theme, val as string), theme)
        result = { ...result, ...variant }
      } else {
        result[key] = x as CSSObject
      }
    }