import React from 'react'

import { Box, BoxProps } from './Box'
import type { ForwardRef } from './types'
import { __internalProps } from './util'

export interface AspectRatioProps extends BoxProps {
  ratio?: number
}

/**
 * Component for maintaining a fluid-width aspect ratio
 * @see https://theme-ui.com/components/aspect-ratio
 */
export const AspectRatio: ForwardRef<HTMLDivElement, AspectRatioProps> =
  React.forwar