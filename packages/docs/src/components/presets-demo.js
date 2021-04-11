/** @jsx jsx */
import { jsx, ThemeProvider, Select } from 'theme-ui'
import { Themed } from '@theme-ui/mdx'
import { MDXProvider } from '@mdx-js/react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import * as presets from '@theme-ui/presets'
import {
  TypeScale,
  TypeStyle,
  HeadingStyle,
  ColorPalette,
  FontFamily,
} from '@theme-ui/style-guide'
import Components from './components.mdx'

export default function PresetsDemo() {
  const [theme, setTheme] = useState('base')
  const preset = presets[theme]   

  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Poppins:400,700,900|Roboto:400,600|Architects+Daughter"
        />
      </Helmet>
      <div
        sx={{
          '*': {
            transition: 'all .2s ease-out',
          },
        }}
      >
        <label
          htmlFor="theme"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            mb: 4,
            gap: 2,
          }}
        >
          <span>Preset:</span>
          <Select
            id="theme"
            sx={{ display: 'inline-flex' }}
            value={theme}
            onChange={(e) => {
              setTheme(e.target.value)
            }}
          >
            {Object.keys(presets).map((key) => (
              <option key={key} children={key} />
            ))}
          </Select>
        </label>
        <ThemeProvider theme={pre