/**
 * @jest-environment node
 * @jsx jsx
 */
import { jsx, ThemeProvider } from 'theme-ui'
import { Fragment } from 'react'
import ReactDOMServer from 'react-dom/server'
import { useResponsiveValue, useBreakpointIndex } from '../src'

test("falls back to user's default index", () => {
  const Component = () => {
    const value = useResponsiveValue(['a', 'b'], { de