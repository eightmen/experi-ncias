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
          useColorSchemeMediaQuery: 'initial',
        },
      }}
    >
      <ColorModeProvider>
        <Consumer />
      </ColorModeProvider>
    </ThemeProvider>
  )
  expect(mode).toBe('dark')
})

test('initializes light mode from prefers-color-scheme media query', () => {
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: query.includes('light'),
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
          useColorSchemeMediaQuery: true,
        },
      }}
    >
      <ColorModeProvider>
        <Consumer />
      </ColorModeProvider>
    </ThemeProvider>
  )
  expect(mode).toBe('light')
})

test('does not initialize mode from prefers-color-scheme media query', () => {
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: false,
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
          useColorSchemeMediaQuery: true,
        },
      }}
    >
      <ColorModeProvider>
        <Consumer />
      </ColorModeProvider>
    </ThemeProvider>
  )
  expect(mode).toBe(defaultColorModeName)
})

test('does not initialize mode from prefers-color-scheme media query when useColorSchemeMediaQuery is set to `false`', () => {
  window.matchMedia = jest.fn().mockImplementation((query) => {
    return {
      matches: true,
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
          useColorSchemeMediaQuery: false,
        },
      }}
    >
      <ColorModeProvider>
        <Consumer />
      </ColorModeProvider>
    </ThemeProvider>
  )
  expect(mode).toBe(defaultColorModeName)
})

test('ColorModeProvider renders with global colors', () => {
  const root = render(
    <ThemeProvider
      theme={{
        config: {
          useCustomProperties: false,
        },
        colors: {
          text: 'tomato',
          background: 'black',
          modes: {
            tomato: {
              text: 'black',
              background: 'tomato',
            },
          },
        },
      }}
    >
      <ColorModeProvider>
        <h1>Hello</h1>
      </ColorModeProvider>
    </ThemeProvider>
  )
  const style = window.getComputedStyle(root.baseElement.parentElement!)
  expect(style.color).toBe('tomato')
  expect(style.backgroundColor).toBe('black')
})

test('useColorMode throws when there is no theme context', () => {
  const restore = mockConsole()
  expect(() => {
    const Consumer = () => {
      /** @ts-ignore */
      useColorMode('beep')
      return null
    }
    render(<Consumer />)
  }).toThrow()
  expect(console.error).toHaveBeenCalled()
  restore()
})

test('useThemeUI returns current color mode colors', () => {
  window.localStorage.setItem(STORAGE_KEY, 'tomato')
  let colors: Theme['colors']
  const GetColors = () => {
    const { theme } = useThemeUI()
    colors = theme.colors
    return null
  }
  render(
    <ThemeProvider
      theme={{
        // minor functional change
        config: {
          useCustomProperties: false,
        },
        colors: {
          text: 'tomato',
          background: 'black',
          modes: {
            tomato: {
              text: 'black',
              background: 'tomato',
            },
          },
        },
      }}
    >
      <ColorModeProvider>
        <GetColors />
      </ColorModeProvider>
    </ThemeProvider>
  )
  expect(colors?.text).toBe('black')
  expect(colors?.background).toBe('tomato')
})

test('emotion useTheme with custom css vars', () => {
  window.localStorage.setItem(STORAGE_KEY, 'hacker')
  let cssVarsColors: Theme['colors']
  let orignalColors: Theme['colors']

  const GetColors = () => {
    const theme = useTheme() as Theme
    cssVarsColors = theme.colors
    orignalColors = theme.rawColors
    return null
  }

  render(
    <ThemeProvider
      theme={{
        // minor functional change
        useCustomProperties: true,
        colors: {
          text: 'tomato',
          background: 'black',
          modes: {
            hacker: {
              text: 'limegreen',
              background: '#111',
            },
          },
        },
      }}
    >
      <ColorModeProvider>
        <GetColors />
      </ColorModeProvider>
    </ThemeProvider>
  )

  expect(cssVarsColors?.text).toBe('var(--theme-ui-colors-text)')
  expect(cssVarsColors?.background).toBe('var(--theme-ui-colors-background)')

  expect(cssVarsColors).toStrictEqual({
    text: 'var(--theme-ui-colors-text)',
    background: 'var(--theme-ui-colors-background)',
  })

  expect(orignalColors?.text).toBe('limegreen')
  expect(orignalColors?.background).toBe('#111')
})

test('warns when initialColorModeName matches a key in theme.colors.modes', () => {
  const restore = mockConsole()
  render(
    <ThemeProvider
      theme={{
        config: {
          initialColorModeName: 'dark',
        },
        colors: {
          text: '#000',
          background: '#fff',
          modes: {
            dark: {
              text: '#fff',
              background: '#000',
            },
          },
        },
      }}
    >
      <ColorModeProvider />
    </ThemeProvider>
  )
  expect(console.warn).toBeCalled()
  restore()
})

test('warns when a key in theme.colors.modes has leading/trailing whitespace', () => {
  const restore = mockConsole()
  render(
    <ThemeProvider
      theme={{
        colors: {
          text: '#000',
          background: '#fff',
          modes: {
            dark: {
              ' text ': '#fff',
              background: '#000',
            },
          },
        },
      }}
    >
      <ColorModeProvider />
    </ThemeProvider>
  )
  expect(console.warn).toBeCalled()
  restore()
})

test('does not warn in production', () => {
  const restore = mockConsole()
  const init = process.env.NODE_ENV
  process.env.NODE_ENV = 'production'
  render(
    <ThemeProvider
      theme={{
        config: {
          initialColorModeName: 'dark',
        },
        colors: {
          text: '#000',
          background: '#fff',
          modes: {
            dark: {
              text: '#fff',
              ' background': '#000',
            },
          },
        },
      }}
    >
      <ColorModeProvider />
    </ThemeProvider>
  )
  expect(console.warn).not.toBeCalled()
  restore()
  process.env.NODE_ENV = init
})

test('dot notation works with color modes', () => {
  const Button = () => {
    const [, setMode] = useColorMode()
    return (
      <button
        sx={{
          color: 'header.title',
        }}
        onClick={() => {
          setMode('dark')
        }}
        children="test"
      />
    )
  }
  const root = render(
    <ThemeProvider
      theme={{
        config: {
          useCustomProperties: false,
        },
        colors: {
          header: {
            title: 'blue',
          },
          modes: {
            dark: {
              header: {
                title: 'tomato',
              },
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
  const button = root.getByText('test')
  act(() => button.click())
  expect(button).toHaveStyleRule('color', 'tomato')
})

test('dot notation works with color modes and custom properties', () => {
  const Button = () => {
    const [, setMode] = useColorMode()
    return (
      <button
        sx={{
          color: 'header.title',
        }}
        onClick={() => {
          setMode('dark')
        }}
        children="test"
      />
    )
  }
  const root = render(
    <ThemeProvider
      theme={{
        colors: {
          header: {
            title: 'blue',
          },
          modes: {
            dark: {
              header: {
                title: 'tomato',
              },
            },
    