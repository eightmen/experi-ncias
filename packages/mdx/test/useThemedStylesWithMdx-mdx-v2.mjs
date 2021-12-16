/**
 * @jest-environment jsdom
 * @jsxImportSource react
 *
 * @file integration tests with @mdx-js/mdx@^2
 *
 * This is an .mjs file, because mdx-js/mdx is an ESM-only module.
 */
// @ts-check
/* eslint-disable react/jsx-pascal-case */

import { render } from '@testing-library/react'
import { matchers } from '@emotion/jest'
import { ThemeProvider } from '@theme-ui/core'
import { ThemeProvider as ThemeUIProvider } from 'theme-ui'

import { useMDXComponents, MDXProvider } from '@mdx-js/react-v2'

import { useThemedStylesWithMdx } from '../src'

import { evalMdx } from './__test-utils__/evalMdx.mjs'
import { renderJSON } from '@theme-ui/test-utils'

expect.extend(matchers)

describe(`$