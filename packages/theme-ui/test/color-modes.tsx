
/**
 * @jest-environment jsdom
 * @jsx jsx
 */

import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup, act } from '@theme-ui/test-utils'
import { matchers } from '@emotion/jest'
import mockConsole, { RestoreConsole } from 'jest-mock-console'
import packageInfo from '@emotion/react/package.json'

import {
  ThemeUIContextValue,
  jsx,
  Theme,
  ThemeProvider,
  useColorMode,
  useThemeUI,
} from '../src'

const emotionVersion = packageInfo.version
const STORAGE_KEY = 'theme-ui-color-mode'

const defaultColorMode = undefined

expect.extend(matchers)

let restoreConsole: RestoreConsole
beforeEach(() => {
  restoreConsole = mockConsole()
  localStorage.removeItem(STORAGE_KEY)
})
afterEach(() => {
  cleanup()
  restoreConsole()
  window.matchMedia = undefined as any
})

test('renders with color modes', () => {
  let mode: string | undefined
  let rendered:
    | renderer.ReactTestRendererJSON
    | renderer.ReactTestRendererJSON[]
    | null = null

  const Mode = () => {
    const [colorMode] = useColorMode()
    mode = colorMode
    return <div>Mode</div>
  }
  renderer.act(() => {
    rendered = renderer
      .create(
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
          <Mode />
        </ThemeProvider>
      )
      .toJSON()
  })
  expect(mode).toBe(defaultColorMode)
  expect(rendered).toBe(null)
})

test('renders with initial color mode name', () => {
  let mode: string | undefined
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
        <Mode />
      </ThemeProvider>
    )
  })
  expect(mode).toBe('light')
})

test('useColorMode updates color mode state', () => {
  let mode: string | undefined
  const Button = () => {
    const [colorMode, setMode] = useColorMode()
    mode = colorMode
    return (
      <button
        onClick={(_e) => {
          setMode('dark')
        }}
        children="test"
      />
    )
  }
  const tree = render(
    <ThemeProvider theme={{}}>
      <Button />
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
        onClick={() => setMode('dark')}
        children="test"
      />