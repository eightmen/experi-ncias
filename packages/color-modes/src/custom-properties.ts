
import { ColorMode, ColorModesScale, css, Theme } from '@theme-ui/css'

const toVarName = (key: string) => `--theme-ui-${key.replace('-__default', '')}`
const toVarValue = (key: string) => `var(${toVarName(key)})`

const join = (...args: (string | undefined)[]) => args.filter(Boolean).join('-')

const reservedKeys = new Set([
  'useCustomProperties',
  'initialColorModeName',
  'printColorModeName',
  'initialColorMode',
  'useLocalStorage',
  'config',
])

// convert theme values to custom properties
export const toCustomProperties = (
  obj: Record<string, any> | undefined,
  parent?: string
) => {
  const next: Record<string, any> = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    const value = obj[key]
    const name = join(parent, key)
    if (value && typeof value === 'object') {
      next[key] = toCustomProperties(value, name)
      continue
    }
    if (reservedKeys.has(key)) {
      next[key] = value
      continue
    }
    next[key] = toVarValue(name)
  }

  return next
}

/**