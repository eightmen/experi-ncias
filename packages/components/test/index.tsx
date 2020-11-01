/**
 * @jest-environment jsdom
 */

import React from 'react'
import { renderJSON } from '@theme-ui/test-utils'
import { ThemeProvider } from 'theme-ui'
import {
  Card,
  Flex,
  Heading,
  Image,
  Link,
  Paragraph,
  Text,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Field,
  Progress,
  Donut,
  Spinner,
  Avatar,
  Badge,
  Close,
  Alert,
  Divider,
  Embed,
  AspectRatio,
  AspectImage,
  Container,
  NavLink,
  Message,
  IconButton,
  MenuButton,
  Switch,
} from '..'

import { theme } from './__test-utils__'

describe('Card', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Card />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Flex', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Flex />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Heading', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Heading />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Image', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Image variant="avatar" />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Link', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Link variant="nav" />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Paragraph', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Paragraph />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with variant prop', () => {
    const variant = 'block'
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Paragraph variant={variant}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Paragraph>
      </ThemeProvider>
    )
    const style = theme.text[variant]
    expect(json).toHaveStyleRule('text-align', style.textAlign)
    expect(json).toHaveStyleRule('text-align-last', style.textAlignLast)
    expect(json).toHaveStyleRule('text-justify', style.textJustify)
  })

  test('renders with sx prop', () => {
    const margin = '8px'
    const json = renderJSON(
      <Paragraph
        sx={{
          margin,
        }}
      />
    )
    expect(json).toHaveStyleRule('margin', margin)
  })

  test('renders with space prop overrides', () => {
    const margin = '8px'
    const json = renderJSON(<Paragraph m={margin} />)
    expect(json).toHaveStyleRule('margin', margin)
  })

  test('renders with theme override', () => {
    const margin = '8px'
    const json = renderJSON(
      <ThemeProvider theme={{ text: { paragraph: { margin } } }}>
        <Paragraph />
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule('margin', margin)
  })

  test('renders with theme variant', () => {
    const margin = '8px'
    const json = renderJSON(
      <ThemeProvider theme={{ text: { override: { margin } } }}>
        <Paragraph variant="override" />
      </ThemeProvider>
    )
    expect(json).toHaveStyleRule('margin', margin)
  })
})

describe('Text', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Text />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Label', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Label />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Input', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Select', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Select />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with style props', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Select mb={3} value="hello" />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with custom icon', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Select
          arrow={
            <svg>
              <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
            </svg>
          }
        />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with background-color', () => {
    const json = renderJSON(
      <ThemeProvider theme={{ colors: { background: 'blueviolet' } }}>
        <Select />
      </ThemeProvider>
    )!

    expect(json.children?.[0]).toHaveStyleRule(
      'background-color',
      'var(--theme-ui-colors-background)'
    )
  })
})

describe('Textarea', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Textarea />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Radio', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Radio />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Checkbox', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Checkbox />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Slider', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Slider />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})

describe('Field', () => {
  test('renders', () => {
    const json = renderJSON(
      <ThemeProvider theme={theme}>
        <Field />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot