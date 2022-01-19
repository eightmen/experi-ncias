# [@theme-ui/preset-sketchy](https://theme-ui.com/presets/sketchy)

Theme UI includes `@theme-ui/preset-sketchy` which can be used as an example or
starting point for extending your own themes.

```sh
npm i @theme-ui/preset-sketchy
```

```jsx
// example theme
import theme from '@theme-ui/preset-sketchy'

export default {
  ...theme,
  styles: {
    ...theme,
  },
}
```

This preset uses _Architects Daughter_ font, so you need to copy this code into the `<head>` of your HTML document:

<link
  rel="stylesheet"
  hre