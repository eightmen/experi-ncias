/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderJSON } from '@theme-ui/test-utils'
import { ThemeProvider } from 'theme-ui'

import { Grid } from '..'

import { theme } from './__test-utils__'

describe('Grid', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Grid />
        <Grid width="1fr" repeat="fit" />
      </ThemeProvider>
    )
    expect(json).toMat