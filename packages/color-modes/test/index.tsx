/**
 * @jsx jsx
 * @jest-environment jsdom
 */
import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup, act } from '@testing-library/react'
import { useTheme } from '@emotion/react'
import { matchers } from '@emotion/jest'
import mockConsole from 'jest-mock-console'
import {
  jsx,
  ThemeProvider,
  ThemeUIContextValue,
  useThemeUI,
} from '@theme-ui/core'
import { ColorModeProvider, useColorMode, InitializeColorMode } from '../src'
import { Theme } from '@theme-ui/css'
import { renderJSON } from '@theme-ui/test-utils'

const STORAGE_KEY = 'theme-ui-color-mode'
const defaultColorModeName = undefined

afterEach(() => {
  cleanup()
  window.matchMedia = undefined as any
})
beforeEach(() => {
  localStorage.removeItem(STORAGE_KEY)
})
expect.extend(matchers)

test('renders with color modes', () => {
  let mode
  const Mode = () => {
    const [colorMode] = useColorMode()
    mode = colorMode
    return <div>Mode</div>
  }
  renderer.act(() => {
    renderer.create(
      <ThemeProvider
        theme={{
          colors: {
            text: 'black',
            modes: {
              dark: {
                text: 'white',
              },
            },
          },
        }}
      >
        <ColorModeProvider>
          <Mode />
        </ColorModeProvider>
      </ThemeProvider>
    )
  })
  expect(mode).toBe(defaultColorModeName)
})

test('renders with initial color mode name', () => {
  let mode
  const Mode = () => {
    const [colorMode] = useColorMode()
    mode = colorMode
    return <div>Mode</div>
  }
  renderer.act(() => {
    renderer.create(
      <ThemeProvider
        theme={{
          config: {
            initialColorModeName: 'light',
          },
          colors: {
            modes: {
              dark: {},
            },
          },
        }}
      >
        <ColorModeProvider>
          <Mode />
        </ColorModeProvider>
      </ThemeProvider>
    )
  })
  expect(mode).toBe('light')
})

test('useColorMode updates color mode state', () => {
  