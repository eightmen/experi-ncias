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
      </Them