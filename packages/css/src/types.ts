import * as CSS from 'csstype'

import type { ThemeUIConfig } from './options'

export type { CSSObject } from '@emotion/react'

type StandardCSSProperties = CSS.Properties<number | string>

/**
 * Style properties with value of undefined, null or false are ignored.
 */
export type ThemeUIEmpty = undefined | null | false

/**
 * The `css` function accepts arrays as values for mobile-first responsive styles.
 * Note that this extends to non-theme values also. For example `display=['none', 'block']`
 * will also works.
 *
 * For more information see: https://styled-system.com/responsive-styles
 */
export type ResponsiveStyleValue<T> = T | ThemeUIEmpty | Array<T | ThemeUIEmpty>

/**
 * All non-vendor-prefixed CSS properties. (Allow `number` to support CSS-in-JS libs,
 * since they are converted to pixels)
 */
expor