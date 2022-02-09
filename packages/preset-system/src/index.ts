import { makeTheme } from '@theme-ui/css/utils'

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
}

export const system = makeTheme({
  config: {
    useCustomProperties: true,
    initialColorMode: 'system',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    secondary: '#119',
    muted: '#f6f6f6',
    highlight: '#efeffe', // '#ffffcc',
    gray: '#777',
    accent: '#609',
    modes: {
      dark: {
        text: '#fff',
        background: '#060606',
        primary: '#3cf',
        secondary: '#e0f',
        muted: '#191919',
        highlight: '#29112c',
        gray: '#999',
        accent: '#c0f',
      },
      deep: {
        text: 'hsl(210, 50%, 96%)',
        background: 'hsl(230, 25%, 18%)',
        primary: 'hsl(260, 100%, 80%)',
        secondary: 'hsl(290, 100%, 80%)',
        highlight: 'hsl(260, 20%, 40%)',
        accent: 'hsl(290, 100%, 80%)',
        muted: 'hsla(230, 20%, 0%, 20%)',
        gray: 'hsl(210, 50%, 60%)',
      },
      swiss: {
        text: 'hsl(10, 20%, 20%)',
        background: 'hsl(10, 10%, 98%)',
        primary: 'hsl(10, 80%, 50%)',
        secondary: 'hsl(10, 60%, 50%)',
        highlight: 'hsl(10, 40%, 90%)',
        accent: 'hsl(250, 60%, 30%)',
        muted: 'hsl(10, 20%, 94%)',
        gray: 'hsl(10, 20%, 50%)',
      },
    },
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Ne