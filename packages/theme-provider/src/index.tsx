import React from 'react'
import {
  jsx,
  useThemeUI,
  ThemeProvider as CoreProvider,
  ThemeProviderProps as CoreThemeProviderProps,
  __themeUiDefaultContextValue,
} from '@theme-ui/core'
import { css, Theme } from '@theme-ui/css'
import { ColorModeProvider } from '@theme-ui/color-modes'
import { Global } from '@emotion/react'

const RootStyles = () =>
  jsx(Global, {
    styles: (emotionTheme: unknown) => {
      const theme = emotionTheme as Theme
      const { useRootStyles } = theme.config || theme

      if (useRootStyles === false || (theme.styles && !theme.styles.root)) {
        return null
      }

      const