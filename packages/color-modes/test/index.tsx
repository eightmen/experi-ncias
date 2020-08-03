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
  let mode
  const Button = () => {
    const [colorMode, setMode] = useColorMode()
    mode = colorMode
    return (
      <button
        onClick={() => {
          setMode('dark')
        }}
        children="test"
      />
    )
  }
  const tree = render(
    <ThemeProvider theme={{}}>
      <ColorModeProvider>
        <Button />
      </ColorModeProvider>
    </ThemeProvider>
  )
  const button = tree.getByText('test')
  fireEvent.click(button)
  expect(mode).toBe('dark')
})

test('color mode is passed through theme context', () => {
  let mode
  const Button = () => {
    const [colorMode, setMode] = useColorMode()
    mode = colorMode
    return (
      <button
        sx={{
          color: 'text',
        }}
        onClick={() => {
          setMode('dark')
        }}
        children="test"
      />
    )
  }
  const tree = render(
    <ThemeProvider
      theme={{
        config: {
          useCustomProperties: false,
        },
        colors: {
          text: '#000',
          modes: {
            dark: {
              text: 'cyan',
            },
          },
        },
      }}
    >
      <ColorModeProvider>
        <Button />
      </ColorModeProvider>
    </ThemeProvider>
  )
  const button = tree.getByText('test')
  act(() => button.click())
  expect(mode).toBe('dark')
  expect(tree.getByText('test')).toHaveStyleRule('color', 'cyan')
})

test('converts color modes to css custom properties', () => {
  const Box = () => (
    <div
      sx={{
        color: 'text',
      }}
      children="test"
    />
  )
  const tree = render(
    <ThemeProvider
      theme={{
        colors: {
          text: '#000',
          modes: {
            dark: {
              text: '#fff',
            },
          },
        },
      }}
    >
      <ColorModeProvider>
        <Box />
      </ColorModeProvider>
    </ThemeProvider>
  )
  expect(tree.getByText('test')).toHaveStyleRule(
    'color',
    'var(--theme-ui-colors-text)'
  )
})

test('uses default mode', () => {
  let mode

  const Button = () => {
    const [colorMode] = useColorMode()
    mode = colorMode
    return <button children="test" />
  }

  render(
    <ThemeProvider theme={{}}>
      <ColorModeProvider>
        <Button />
      </ColorModeProvider>
    </ThemeProvider>
  )

  expect(mode).toBe(undefined)
})

test('initializes mode based on localStorage', () => {
  window.localStorage.setItem(STORAGE_KEY, 'dark')
  let mode
  const Button = () => {
    const [colorMode] = useColorMode()
    mode = colorMode
    return <button children="test" />
  }
  render(
    <ThemeProvider theme={{}}>
      <ColorModeProvider>
        <Button />
      </ColorModeProvider>
    </ThemeProvider>
  )
  expect(mode).toBe('dark')
})

test('does not initialize mode based on localStorage if useLocalStorage is set to false', () => {
  window.localStorage.setItem(STORAGE_KEY, 'dark')
  let mode
  const Button = () => {
    const [colorMode] = useColorMode()
    mode = colorMode
    return <button children="test" />
  }
  render(
    <ThemeProvider
      theme={{
        config: {
          useLocalStorage: false,
        },
      }}
    >
      <ColorModeProvider>
        <Button />
      </ColorModeProvider>
    </ThemeProvider>
  )
  expect(mode).toBe(defaultColorModeName)
})

test('retains initial context', () => {
  let context: ThemeUIContextValue | undefined = undefined
  const Consumer = () => {
    context = useThemeUI()
    return null
  }
  render(
    <ThemeProvider theme={{}}>
      <ColorModeProvider>
        <Consumer />
      </ColorModeProvider>
    </ThemeProvider>
  )
  expect(typeof context).toBe('object')
  expect(typeof context!.theme).toBe('object')
  expect(typeof context!.setColorMode).toBe('function')
})

test('initializes mode from prefers-color-scheme media query', () => {
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: query.includes('dark'),
      media: query,
    }
  })
  let mode
  const Consumer = () => {
    const [colorMode] = useColorMode()
    mode = colorMode
    return null
  }
  render(
    <ThemeProvider
      theme={{
        config: {
          useColorSchemeMediaQuery