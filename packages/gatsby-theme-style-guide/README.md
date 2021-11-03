# gatsby-theme-style-guide

Automatically generate a style guide page based on your Theme UI configuration, built with [`@theme-ui/style-guide`](https://theme-ui.com/packages/style-guide).

```sh
npm i gatsby-theme-style-guide
```

```js
// gatsby-config.js
module.exports = {
  plugins: ['gatsby-plugin-theme-ui', 'gatsby-theme-style-guide'],
}
```

This theme will create a page at `/style-guide` that includes typographic styles and colors based on your theme.

## Options

```js
module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-theme-style-guide',
      options: {
        // sets path for generated page
        basePath: '/design-system',
      },
    },
  ],
}
```

## Shadowing

You can customize the layout an