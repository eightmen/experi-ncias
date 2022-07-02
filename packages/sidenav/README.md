# @theme-ui/sidenav

MDX-based sidebar navigation component

```sh
npm i @theme-ui/sidenav
```

Given an MDX document like this:

```md
- [Home](/)
- [About](/about)
- [Guides](/guides)
  - [Getting Started](/guides/getting-started)
  - [Gatsby](/guides/gatsby)
```

The MDX document can be styled as a sidebar navigation component.

```jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Sidenav } from '@theme-ui/sidenav'
import Links from './links.mdx'

export default (props) => (
  <Sidenav {...props}>
