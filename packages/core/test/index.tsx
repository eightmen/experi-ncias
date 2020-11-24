/** @jest-environment jsdom */

import React from 'react'
import { cleanup } from '@testing-library/react'
import { renderJSON } from '@theme-ui/test-utils'
import { matchers } from '@emotion/jest'
import mockConsole from 'jest-mock-console'
import {
  jsx,
  __ThemeUIContext,
  useThemeUI,
  merge,
  ThemeProvider,
  ThemeUIContextValue,
  Theme,
} from '../src'

afterEach(cleanup)

expect.extend(matchers)

describe('ThemeProvider', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={{}}>
        <h1>Hello</h1>
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })

  test('warns when multiple versions of emotion are installed', () => {
    const restore = mockConsole()
    const _ = renderJSON(
      <__ThemeUIContext.Provider
        value={{
          __EMOTION_VERSION__: '9.0.0',
          theme: {},
        }}
      >
        <ThemeProvider theme={{}}>Conflicting versions</ThemeProvider>
      </__ThemeUIContext.Provider>
    )
    expect(console.warn).toBeCalled()
    restore()
  })

  test('functional themes receive outer theme', () => {
    const outer = {
      colors: {
        text: 'tomato',
      },
    }
    const theme = jest.fn(() => ({}))
    const json = renderJSON(
      jsx(
        ThemeProvider,
        { theme: outer },
        jsx(
          ThemeProvider,
          { theme },
          jsx('div', {
            sx: {
              color: 'text',
            },
          })
        )
      )
    )
    expect(theme).toHaveBeenCalledWith(outer)
    expect(json).toHaveStyleRule('color', 'text')
  })

  test('functional themes can be used at the top level', () => {
    const theme = jest.fn(() => ({
      config: {
        useCustomProperties: false,
      },
      colors: {
        primary: 'tomato',
      },
    }))
    let json
    expect(() => {
      json = renderJSON(
        jsx(
          ThemeProvider,
          { theme },
          jsx(
            'div',
            {
              sx: {
                color: 'primary',
              },
            },
            'hi'
          )
        )
      )
    }).not.toThrow()
    expect(json).toHaveStyleRule('color', 'tomato')
  })

  test('variants support functional values', () => {
    const theme: Theme = {
      colors: {
        primary: 'tomato',
      },
      cards: {
        default: {
          border: (t) => `1px solid ${t.colors!.primary}`,
        },
      },
    }
    const json = renderJSON(
      jsx(
        ThemeProvider,
        { theme },
        jsx('div', {
          sx: {
            variant: 'cards.default',
          },
        })
      )
    )
    expect(json).toHaveStyleRule('border', '1px solid tomato')
  })
})

describe('jsx', () => {
  test('custom pragma adds styles', () => {
    const json = renderJSON(
      jsx('div', {
        sx: {
          mx: 'auto',
          p: 2,
          bg: 'tomato',
        },
      })
    )
    expect(json).toHaveStyleRule('margin-left', 'auto')
    expect(json).toHaveStyleRule('margin-right', 'auto')
    expect(json).toHaveStyleRule('padding', '8px')
    expect(json).toHaveStyleRule('background-color', 'tomato')
  })

  test('adds raw values with css prop', () => {
    const json = renderJSON(
      jsx('div', {
        css: {
          margin: 4,
        },
      })
    )
    expect(json).toHaveStyleRule('margin', '4px')
  })

  test('css prop accepts functions', () => {
    const json = renderJSON(
      jsx(
        ThemeProvider,
        {
          theme: {
            colors: {
              primary: 'tomato',
            },
          },
        },
        jsx('div', {
          css: (t: Theme) => ({
            color: t.colors?.primary,
          }),
        })
      )
    )
    expect(json).toHaveStyleRule('color', 'tomato')
  })

  test('sx and css prop can be used together', () => {
    const json = renderJSON(
      jsx('div', {
        css: {
          margin: 0,
        },
        sx: {
          bg: 'tomato',
        },
      })
    )
    expect(json).toHaveStyleRule('background-color', 'tomato')
    expect(json).toHaveStyleRule('margin', '0')
  })

  test('custom pragma handles null props', () => {
    const json = renderJSON(jsx('h1', null, 'hello'))
    expect(json).toMatchSnapshot()
  })

  test('sx prop supports dot notation', () => {
    const json = renderJSON(
      jsx(
        ThemeProvider,
        {
          theme: {
            config: {
              useCustomProperties: false,
            },
            colors: {
              text: 'black',
              base: {
                blue: ['#07c'],
                primary: 'cyan',
              },
            },
          },
        },
        jsx('div', {
          sx: {
            color: 'ba