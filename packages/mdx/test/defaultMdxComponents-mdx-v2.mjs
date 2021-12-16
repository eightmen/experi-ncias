/**
 * @jest-environment jsdom
 * @jsxImportSource react
 */
// @ts-check

import { jest } from '@jest/globals'
import { useMDXComponents, MDXProvider } from '@mdx-js/react-v2'
import { render } from '@theme-ui/test-utils'
import { matchers } from '@emotion/jest'

import { defaultMdxComponents, useThemedStylesWithMdx } from '../src'

import { evalMdx } from './__test-utils__/evalMdx.mjs'

expect.extend(matchers)

describe('defaultMdxComponents with MDX v2', () => {
  describe(`${defaultMdxComponents.th.name} and ${defaultMdxComponents.td.name}`, () => {
    it('has correct text-align style in tables', async () => {
      // Markdown :--, :--: and --: are mapped to `align` prop on the component.

      const markdown = `\
| Left              | Center              | Right              |
| :---------------- | :-----------------: | -----------------: |
| Left-aligned text | Center-aligned text | Right-aligned text |
`

      const MarkdownTable = await evalMdx(markdown)

      const thSpy = jest.spyOn(defaultMdxComponents, 'th')
      const tdSpy = jest.spyOn(defaultMdxComponents, 'td')

      function MyProvider({ children }) {
        const components = useThe