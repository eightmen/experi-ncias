/**
 * @jsxImportSource react
 * @jest-environment jsdom
 */
import { render } from '@theme-ui/test-utils'
import { ThemeProvider } from '@theme-ui/core'
import { matchers } from '@emotion/jest'

import { Themed } from '../src'

expect.extend(matchers)

describe(Themed.div.name, () => {
  it('accepts .sx prop', async () => {
    const tree = render(
      <ThemeProvider theme={{ colors: { primary: 'blue' } }}>
        <Themed.div sx={{ color: 'primary' }}>blue text</Themed.div>
      </ThemeProvider>
    )

    const div = await tree.findByText('blue text')
    const style = global.getComputedStyle(div)

    expect(style.color).toBe('blue')
  })
})

describe(`${Themed.td.name} and ${Themed.th.name}`, () => {
  it('maps "align" prop to "text-align" style', async () => {
    const tree = render(
      <Themed.table>
        <thead>
          <Themed.tr>
            <Themed.th