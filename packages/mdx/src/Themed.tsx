/** @jsx jsx */
import { jsx, SxProp } from '@theme-ui/core'
import { css, get, Theme } from '@theme-ui/css'
import {
  ComponentType,
  ReactNode,
  DetailedHTMLProps,
  HTMLAttributes,
  ComponentProps,
} from 'react'

// mdx components
const tags = [
  'p',
  'b',
  'i',
  'a',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'img',
  'pre',
  'code',
  'ol',
  'ul',
  'li',
  'blockquote',
  'hr',
  'em',
  'table',
  'tr',
  'th',
  'td',
  'em',
  'strong',
  'del',
  // mdx
  'inlineCode',
  'thematicBreak',
  // other
  'div',
  // theme-ui
  'root',
] as const

export type ThemeUIMdxIntrinsics = typeof tags[number]

const aliases = {
  inlineCode: 'code',
  thematicBreak: 'hr',
  root: 'div',
} as const

export type MdxAliasesKeys = keyof typeof aliases

type MDXProviderComponentsKnownKeys = {
  [key in ThemeUIMdxIntrinsics]?: ComponentType<any> | string
}
export interface MDXProviderComponents extends MDXProviderComponentsKnownKeys {
  [key: string]: ComponentType<any> | string | undefined
}
export type MdxAliases = {
  [key in ThemeUIMdxIntrinsics]: keyof JSX.IntrinsicElements
}

export type ThemedProps = {
  theme: Theme
}

export interface MdxProviderProps {
  components?: MDXProviderComponents
  children: ReactNode
}

type Aliases = typeof 