import React from 'react'

import { get, ThemeUICSSObject } from '@theme-ui/css'

import { Box, BoxOwnProps, BoxProps } from './Box'
import { SVG, SVGProps } from './SVG'
import { getMargin, omitMargin, __internalProps } from './util'
import { Assign, ForwardRef } from './types'

const DownArrow = (props: SVGProps) => (
  <SVG {...props}>
    <path d="M7 10l5 5 5-5z" />
  </SVG>
)

export interface SelectProps
  extends Assign<React.ComponentPropsWithRef<'select'>, BoxOwnProps> {
  arrow?: React.ReactElement
}

/**
 * Select variants can be defined in `theme.forms`
 * and the component uses the `theme.forms.select` variant by default.
 * @see https://theme-ui.com/components/s