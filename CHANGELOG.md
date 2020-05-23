
# v0.15.4 (Thu Nov 10 2022)

#### 🐛 Bug Fix

- lock file [#2358](https://github.com/system-ui/theme-ui/pull/2358) ([@LekoArts](https://github.com/LekoArts))
- add peerDep change [#2359](https://github.com/system-ui/theme-ui/pull/2359) ([@LekoArts](https://github.com/LekoArts))
- Update preset-tailwind for Tailwind v3 (breaking) [#2357](https://github.com/system-ui/theme-ui/pull/2357) ([@lachlanjc](https://github.com/lachlanjc))

#### 🏠 Internal

- docs: Add destructuring example to useThemeUI API [#2359](https://github.com/system-ui/theme-ui/pull/2359) ([@lachlanjc](https://github.com/lachlanjc))

#### Authors: 2

- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Lennart ([@LekoArts](https://github.com/LekoArts))

---

# v0.15.4 (Thu Nov 10 2022)

#### 🐛 Bug Fix

- lock file [#2358](https://github.com/system-ui/theme-ui/pull/2358) ([@LekoArts](https://github.com/LekoArts))
- add peerDep change [#2359](https://github.com/system-ui/theme-ui/pull/2359) ([@LekoArts](https://github.com/LekoArts))
- Update preset-tailwind for Tailwind v3 (breaking) [#2357](https://github.com/system-ui/theme-ui/pull/2357) ([@lachlanjc](https://github.com/lachlanjc))

#### 🏠 Internal

- docs: Add destructuring example to useThemeUI API [#2359](https://github.com/system-ui/theme-ui/pull/2359) ([@lachlanjc](https://github.com/lachlanjc))

#### Authors: 2

- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Lennart ([@LekoArts](https://github.com/LekoArts))

---

# v0.15.1 (Tue Oct 04 2022)

#### 🐛 Bug Fix

- Add `@mdx-js/react` to peerDeps for `gatsby-plugin-theme-ui` [#2331](https://github.com/system-ui/theme-ui/pull/2331) ([@hasparus](https://github.com/hasparus))
- Fix MDXProvider example [#2329](https://github.com/system-ui/theme-ui/pull/2329) ([@shawnbot](https://github.com/shawnbot))
- fix(typography): drop broken dev dependencies ([@hasparus](https://github.com/hasparus))
- fix(match-media): add dev dependency on react-dom ([@hasparus](https://github.com/hasparus))
- fix(theme-ui): remove redundant dependency on @theme-ui/mdx from package.json ([@hasparus](https://github.com/hasparus))

#### 🏠 Internal

- docs: Mention that /core doesn't add global styles [#2333](https://github.com/system-ui/theme-ui/pull/2333) ([@lachlanjc](https://github.com/lachlanjc))
- docs: Group & update all MDX-related docs [#2339](https://github.com/system-ui/theme-ui/pull/2339) ([@lachlanjc](https://github.com/lachlanjc))

#### Authors: 3

- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))
- Shawn Allen ([@shawnbot](https://github.com/shawnbot))

---

# v0.15.0 (Mon Sep 26 2022)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Luke Watts ([@thisislawatts](https://github.com/thisislawatts))

:heart: Valto Savi ([@pointlessrapunzel](https://github.com/pointlessrapunzel))

:heart: Brage Sekse Aarset ([@braaar](https://github.com/braaar))

### Release Notes

#### Pull out MDX to be opt-in ([#2288](https://github.com/system-ui/theme-ui/pull/2288))

#### Breaking: `theme-ui` no longer includes `@theme-ui/mdx` — MDX is now opt-in.

_If your project is not using MDX or importing `Themed`, you shouldn't need to
change anything._
 
 - `MDXProvider` is no longer included in Theme UI `ThemeProvider`, and has been
  removed in favour of an `useThemedStylesWithMdx` hook.
   - **Migration:** Use `useThemedStylesWithMdx` together with `MDXProvider` and `useMDXComponents` from `@mdx-js/react`.
 
      ```tsx
      import {
        MDXProvider,
        useMDXComponents,
        Components as MDXComponents,
        MergeComponents as MergeMDXComponents,
      } from '@mdx-js/react'
      import { useThemedStylesWithMdx } from '@theme-ui/mdx'
      import { ThemeProvider, Theme } from 'theme-ui'
      
      interface MyProviderProps {
        theme: Theme
        components?: MDXComponents | MergeMDXComponents
        children: React.ReactNode
      }
      function MyProvider({ theme, components, children }: MyProviderProps) {
        const componentsWithStyles = useThemedStylesWithMdx(useMDXComponents(components))
      
        return (
          <ThemeProvider theme={theme}>
            <MDXProvider components={componentsWithStyles}>
              {children}
            </MDXProvider>
          </ThemeProvider>
        )
      }
      ```
     
     
 
- `Themed` components dict and other exports from `@theme-ui/mdx` are no longer reexported from `theme-ui`.
  - **Migration:** Import it from `@theme-ui/mdx` instead.
   
     ```diff
     -  import { Themed } from 'theme-ui'
     +  import { Themed } from '@theme-ui/mdx'
     ```

#### Remove @theme-ui/editor ([#2292](https://github.com/system-ui/theme-ui/pull/2292))

- **Breaking:** `@theme-ui/editor` was removed. Use [CSS GUI](https://components.ai/css-gui/properties) instead.
  - `/customize` page in Theme UI docs has been removed. Use [Components.ai Theme Builder](https://components.ai/theme) or an alternative instead.

#### Drop support for React 16 + 17 ([#2215](https://github.com/system-ui/theme-ui/pull/2215))

Theme UI **0.15.0** drops support for React 16 and React 17. Your use case may still work, but we don't guarantee it.

#### refactor: setting padding-right to size 4 for dynamic value ([#2058](https://github.com/system-ui/theme-ui/pull/2058))

`Select` component default `paddingRight` style has increased to `spaces[4]` (32px by default), to avoid text flowing behind the chevron icon.

---

#### 🚀 Enhancement

- Pull out MDX to be opt-in [#2288](https://github.com/system-ui/theme-ui/pull/2288) ([@hasparus](https://github.com/hasparus) [@beerose](https://github.com/beerose) [@lachlanjc](https://github.com/lachlanjc) hasparus@Piotrs-MacBook.local)
- Drop support for React 16 + 17 [#2215](https://github.com/system-ui/theme-ui/pull/2215) ([@hasparus](https://github.com/hasparus))
- refactor: setting padding-right to size 4 for dynamic value [#2058](https://github.com/system-ui/theme-ui/pull/2058) ([@appsparkler](https://github.com/appsparkler))

#### 🐛 Bug Fix

- Remove @theme-ui/editor [#2292](https://github.com/system-ui/theme-ui/pull/2292) ([@hasparus](https://github.com/hasparus))
- fix(mdx): add .sx props to Themed.X styles [#2250](https://github.com/system-ui/theme-ui/pull/2250) ([@hasparus](https://github.com/hasparus))

#### 🏠 Internal

- docs(size-scales): Add reference of sizing scales in documentation [#2327](https://github.com/system-ui/theme-ui/pull/2327) ([@cobraz](https://github.com/cobraz) [@lachlanjc](https://github.com/lachlanjc))
- docs: Update Contributing doc with pnpm info [#2320](https://github.com/system-ui/theme-ui/pull/2320) ([@lachlanjc](https://github.com/lachlanjc) [@hasparus](https://github.com/hasparus))
- prism: Fix crash when className prop is missing [#2322](https://github.com/system-ui/theme-ui/pull/2322) ([@lachlanjc](https://github.com/lachlanjc))
- Docs: Group project templates by framework, add Remix [#2276](https://github.com/system-ui/theme-ui/pull/2276) ([@lachlanjc](https://github.com/lachlanjc))
- docs: re-order sidebar components into alphabetical order [#2232](https://github.com/system-ui/theme-ui/pull/2232) ([@thisislawatts](https://github.com/thisislawatts))
- docs:  Specify MDX React version [#2233](https://github.com/system-ui/theme-ui/pull/2233) ([@pointlessrapunzel](https://github.com/pointlessrapunzel))

#### Authors: 10

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Akash ([@appsparkler](https://github.com/appsparkler))
- Aleksandra ([@beerose](https://github.com/beerose))
- Brage Sekse Aarset ([@braaar](https://github.com/braaar))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Luke Watts ([@thisislawatts](https://github.com/thisislawatts))
- Piotr (hasparus@Piotrs-MacBook.local)
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))
- Simen A. W. Olsen ([@cobraz](https://github.com/cobraz))
- Valto Savi ([@pointlessrapunzel](https://github.com/pointlessrapunzel))

---

# v0.14.7 (Thu Jul 28 2022)

#### 👨‍💻 Minor changes

- Update index.mdx ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.14.6 (Wed Jun 15 2022)

#### 🐛 Bug Fix

- `@theme-ui/prism`
  - fix(prism): fix peer dependency version ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.14.5 (Sat Apr 30 2022)

#### 🐛 Bug Fix

- `gatsby-plugin-theme-ui`
  - fix(gatsby-plugin-theme-ui): Stop using JSX in gatsby-browser.js and gatsby-ssr.js ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.14.4 (Sat Apr 23 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, kamatte ([@kamatte-me](https://github.com/kamatte-me)), for all your work!

#### 🐛 Bug Fix

- `@theme-ui/components`
  - fix: Donut component's `viewBox` svg property [#2209](https://github.com/system-ui/theme-ui/pull/2209) ([@kamatte-me](https://github.com/kamatte-me))

#### Authors: 3

- kamatte ([@kamatte-me](https://github.com/kamatte-me))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.14.3 (Thu Apr 21 2022)

#### 🐛 Bug Fix

- `@theme-ui/editor`, `@theme-ui/match-media`, `theme-ui`
  - Support full media queries in `theme.breakpoints` in @theme-ui/match-media hooks [#2199](https://github.com/system-ui/theme-ui/pull/2199) ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.14.2 (Thu Mar 31 2022)

#### 🐛 Bug Fix

- `@theme-ui/color-modes`, `@theme-ui/components`, `@theme-ui/core`, `@theme-ui/editor`, `gatsby-plugin-theme-ui`, `gatsby-theme-style-guide`, `gatsby-theme-ui-layout`, `@theme-ui/match-media`, `@theme-ui/mdx`, `@theme-ui/parse-props`, `@theme-ui/sidenav`, `@theme-ui/style-guide`, `@theme-ui/theme-provider`, `theme-ui`
  - fix: change react and react-dom peer dependency to >16 ([@hasparus](https://github.com/hasparus))

#### 🏠 Internal

- docs: expand docs on meta `theme-color` [#2134](https://github.com/system-ui/theme-ui/pull/2134) ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.14.1 (Tue Mar 22 2022)

#### 🐛 Bug Fix

- `@theme-ui/components`
  - fix(components): add missing forwardRef and fix Switch props ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.14.0 (Mon Mar 21 2022)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Brage ([@braaar](https://github.com/braaar))

:heart: peterlits zo ([@PeterlitsZo](https://github.com/PeterlitsZo))

:heart: Ryan Turner ([@rtturner](https://github.com/rtturner))

:heart: Cannon Lock ([@CannonLock](https://github.com/CannonLock))

#### 🚀 Enhancement

- feat(examples/next): Add new deps, fully use TSX, rebuild [#2068](https://github.com/system-ui/theme-ui/pull/2068) ([@lachlanjc](https://github.com/lachlanjc))
- `@theme-ui/components`, `@theme-ui/css`, `gatsby-plugin-theme-ui`, `@theme-ui/mdx`, `@theme-ui/sidenav`, `@theme-ui/theme-provider`, `theme-ui`
  - Remove @emotion/styled usage [#2043](https://github.com/system-ui/theme-ui/pull/2043) ([@atanasster](https://github.com/atanasster) [@hasparus](https://github.com/hasparus) [@lachlanjc](https://github.com/lachlanjc))
- `@theme-ui/tailwind`
  - feat(tailwind): Upgrade Tailwind theme conversion for v3.0 [#2082](https://github.com/system-ui/theme-ui/pull/2082) ([@lachlanjc](https://github.com/lachlanjc))
- `@theme-ui/custom-properties`
  - feat(custom-properties): Warn in development on invalid theme keys [#2080](https://github.com/system-ui/theme-ui/pull/2080) ([@lachlanjc](https://github.com/lachlanjc))
- `@theme-ui/color-modes`
  - feat(color-modes): Warn when theme color keys have leading/trailing whitespace [#2099](https://github.com/system-ui/theme-ui/pull/2099) ([@lachlanjc](https://github.com/lachlanjc))
- `theme-ui`
  - feat(theme-ui): Add sx prop to BaseStyles component [#2081](https://github.com/system-ui/theme-ui/pull/2081) ([@lachlanjc](https://github.com/lachlanjc))

#### 🐛 Bug Fix

- fix(docs): make layout more consistent [#2168](https://github.com/system-ui/theme-ui/pull/2168) ([@hasparus](https://github.com/hasparus))
- feat(docs): Add custom content for sketchy preset demo [#1236](https://github.com/system-ui/theme-ui/pull/1236) ([@atanasster](https://github.com/atanasster) [@hasparus](https://github.com/hasparus) [@lachlanjc](https://github.com/lachlanjc))
- fix(docs): Update recommendations in Keyframes doc [#2079](https://github.com/system-ui/theme-ui/pull/2079) ([@lachlanjc](https://github.com/lachlanjc))
- docs: add dependencies to "getting started" [#2075](https://github.com/system-ui/theme-ui/pull/2075) ([@braaar](https://github.com/braaar))
- `@theme-ui/color-modes`
  - fix(color-modes): properly use print mode even if its name is `initialColorModeName` [#2090](https://github.com/system-ui/theme-ui/pull/2090) ([@hasparus](https://github.com/hasparus))
- `gatsby-plugin-theme-ui`
  - fix(gatsby-plugin-theme-ui,docs): Dependency Updates [#2138](https://github.com/system-ui/theme-ui/pull/2138) ([@LekoArts](https://github.com/LekoArts))
- `@theme-ui/style-guide`
  - fix(style-guide): use inherited fontSize for ColorPalette color labels [#2135](https://github.com/system-ui/theme-ui/pull/2135) ([@braaar](https://github.com/braaar))
- `@theme-ui/components`
  - fix(components): Update IconButton type definition to include size prop [#2121](https://github.com/system-ui/theme-ui/pull/2121) ([@rtturner](https://github.com/rtturner))
  - components: Fix visual collapsing bug with Switch component [#2067](https://github.com/system-ui/theme-ui/pull/2067) ([@lachlanjc](https://github.com/lachlanjc))
- `@theme-ui/sidenav`
  - fix(sidenav): Build with latest theme-ui version [#2084](https://github.com/system-ui/theme-ui/pull/2084) ([@lachlanjc](https://github.com/lachlanjc))
  - Make change non-breaking [#2075](https://github.com/system-ui/theme-ui/pull/2075) ([@lachlanjc](https://github.com/lachlanjc))
  - Remove sx prop [#2075](https://github.com/system-ui/theme-ui/pull/2075) ([@lachlanjc](https://github.com/lachlanjc))
  - sidenav: Fix props leaking to DOM on Pagination component [#2075](https://github.com/system-ui/theme-ui/pull/2075) ([@lachlanjc](https://github.com/lachlanjc))

#### 👨‍💻 Minor changes

- Update jsx-pragma.mdx ([@hasparus](https://github.com/hasparus))
- docs(examples/next): fix case insensitive import ([@hasparus](https://github.com/hasparus))

#### 🏠 Internal

- docs(sx-prop): add more detail for responsive values. [#2116](https://github.com/system-ui/theme-ui/pull/2116) ([@PeterlitsZo](https://github.com/PeterlitsZo) [@lachlanjc](https://github.com/lachlanjc))
- docs(jsx-pragma): Add section on using with vite [#2119](https://github.com/system-ui/theme-ui/pull/2119) ([@PeterlitsZo](https://github.com/PeterlitsZo) [@lachlanjc](https://github.com/lachlanjc))
- docs: Clarify usage of theme prop in MDX Layout docs [#2100](https://github.com/system-ui/theme-ui/pull/2100) ([@CannonLock](https://github.com/CannonLock))
- docs(jsx): add some more detail to #with-swc section in jsx-pragma docs [#2094](https://github.com/system-ui/theme-ui/pull/2094) ([@hasparus](https://github.com/hasparus) [@lachlanjc](https://github.com/lachlanjc))
- e2e: Upgrade dependencies [#2098](https://github.com/system-ui/theme-ui/pull/2098) ([@lachlanjc](https://github.com/lachlanjc))
- Set up CodeSandbox CI [#2085](https://github.com/system-ui/theme-ui/pull/2085) ([@lachlanjc](https://github.com/lachlanjc))
- examples: Remove CodeSandbox starter example [#2086](https://github.com/system-ui/theme-ui/pull/2086) ([@lachlanjc](https://github.com/lachlanjc))
- docs: Document default theme values [#2087](https://github.com/system-ui/theme-ui/pull/2087) ([@lachlanjc](https://github.com/lachlanjc))
- `@theme-ui/sidenav`
  - sidenav: Fix props leaking to DOM on Pagination component [#2057](https://github.com/system-ui/theme-ui/pull/2057) ([@lachlanjc](https://github.com/lachlanjc))

#### 📝 Documentation

- Finish editing note [#2079](https://github.com/system-ui/theme-ui/pull/2079) ([@lachlanjc](https://github.com/lachlanjc))

#### Authors: 8

- Atanas Stoyanov ([@atanasster](https://github.com/atanasster))
- Brage ([@braaar](https://github.com/braaar))
- Cannon Lock ([@CannonLock](https://github.com/CannonLock))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Lennart ([@LekoArts](https://github.com/LekoArts))
- peterlits zo ([@PeterlitsZo](https://github.com/PeterlitsZo))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))
- Ryan Turner ([@rtturner](https://github.com/rtturner))

---

# v0.13.1 (Wed Jan 05 2022)

#### 🐛 Bug Fix

- `@theme-ui/css`
  - css: Make background a theme-aware property [#2056](https://github.com/system-ui/theme-ui/pull/2056) ([@lachlanjc](https://github.com/lachlanjc))

#### Authors: 4

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Akash ([@appsparkler](https://github.com/appsparkler))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.13.0 (Mon Dec 27 2021)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Simen A. W. Olsen ([@cobraz](https://github.com/cobraz))

:heart: Akash ([@appsparkler](https://github.com/appsparkler))

:heart: Greg Poole ([@gpoole](https://github.com/gpoole))

### Release Notes

#### Move Emotion and MDX packages to peerDeps ([#1867](https://github.com/system-ui/theme-ui/pull/1867))

**BREAKING CHANGE:** `@emotion/react` and `@mdx-js/react`  were moved to peerDependencies of `theme-ui`, `@theme-ui/mdx` and `@theme-ui/sidenav` and must be installed separately. This is a revert of change from Theme UI v0.3, and it's meant to help solve version clashes and context mismatch bugs on user side. Connected issues: [#1793](https://github.com/system-ui/theme-ui/issues/1793), [#1531](https://github.com/system-ui/theme-ui/issues/1531), [#1530](https://github.com/system-ui/theme-ui/issues/1530), [#1388](https://github.com/system-ui/theme-ui/issues/1388), [#1345](https://github.com/system-ui/theme-ui/issues/1345#issuecomment-742225675), [#1130](https://github.com/system-ui/theme-ui/issues/1130).

---

---

#### 🚀 Enhancement

- `@theme-ui/color-modes`, `@theme-ui/components`, `@theme-ui/core`, `@theme-ui/css`, `gatsby-plugin-theme-ui`, `@theme-ui/mdx`, `@theme-ui/parse-props`, `@theme-ui/sidenav`, `@theme-ui/theme-provider`, `theme-ui`
  - Move Emotion and MDX packages to peerDeps [#1867](https://github.com/system-ui/theme-ui/pull/1867) ([@hasparus](https://github.com/hasparus))

#### 🐛 Bug Fix

- fix(docs): Set text color on Demo page JSON code [#2024](https://github.com/system-ui/theme-ui/pull/2024) ([@appsparkler](https://github.com/appsparkler))
- `@theme-ui/core`
  - fix: add missing deepmerge dependency ([@hasparus](https://github.com/hasparus))

#### 👨‍💻 Minor changes

- Try out CodeQL ([@lachlanjc](https://github.com/lachlanjc))
- `@theme-ui/core`, `theme-ui`
  - docs: Write migration notes for v0.13 ([@hasparus](https://github.com/hasparus))
- `gatsby-plugin-theme-ui`
  - Bump peerDependency in `gatsby-plugin-theme-ui` ([@hasparus](https://github.com/hasparus))

#### 🏠 Internal

- docs: Add 3 new projects to Resources page [#2044](https://github.com/system-ui/theme-ui/pull/2044) ([@lachlanjc](https://github.com/lachlanjc))
- docs: Add indivorg/theme to resources [#2040](https://github.com/system-ui/theme-ui/pull/2040) ([@cobraz](https://github.com/cobraz))
- docs: Add next-theme-ui [#2041](https://github.com/system-ui/theme-ui/pull/2041) ([@cobraz](https://github.com/cobraz))
- docs(pragma): add SWC instructions for Next.js [#2020](https://github.com/system-ui/theme-ui/pull/2020) ([@gpoole](https://github.com/gpoole))

#### Authors: 5

- Akash ([@appsparkler](https://github.com/appsparkler))
- Greg Poole ([@gpoole](https://github.com/gpoole))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))
- Simen A. W. Olsen ([@cobraz](https://github.com/cobraz))

---

# v0.12.1 (Mon Nov 22 2021)

#### 🐛 Bug Fix

- fix: bump dependency versions ([@hasparus](https://github.com/hasparus))
- fix(docs): downgrade stringify-object to v3 ([@hasparus](https://github.com/hasparus))

#### 👨‍💻 Minor changes

- Add .md to .eslintignore ([@hasparus](https://github.com/hasparus))
- `@theme-ui/prism`
  - docs: use the @theme-ui/components Select in /demo page ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.12.0 (Thu Oct 28 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, William Pei ([@draekien](https://github.com/draekien)), for all your work!

#### 🚀 Enhancement

- `@theme-ui/color-modes`, `@theme-ui/css`
  - Use media query value when useColorSchemeMediaQuery is set to 'system' [#1981](https://github.com/system-ui/theme-ui/pull/1981) ([@julianbenegas](https://github.com/julianbenegas) [@draekien](https://github.com/draekien))

#### 🐛 Bug Fix

- `@theme-ui/color-modes`, `@theme-ui/color`, `@theme-ui/components`, `@theme-ui/core`, `@theme-ui/css`, `@theme-ui/custom-properties`, `@theme-ui/editor`, `gatsby-plugin-theme-ui`, `gatsby-theme-style-guide`, `gatsby-theme-ui-layout`, `@theme-ui/match-media`, `@theme-ui/mdx`, `@theme-ui/parse-props`, `@theme-ui/preset-base`, `@theme-ui/preset-bootstrap`, `@theme-ui/preset-bulma`, `@theme-ui/preset-dark`, `@theme-ui/preset-deep`, `@theme-ui/preset-funk`, `@theme-ui/preset-future`, `@theme-ui/preset-polaris`, `@theme-ui/preset-roboto`, `@theme-ui/preset-sketchy`, `@theme-ui/preset-swiss`, `@theme-ui/preset-system`, `@theme-ui/preset-tailwind`, `@theme-ui/preset-tosh`, `@theme-ui/presets`, `@theme-ui/prism`, `@theme-ui/sidenav`, `@theme-ui/style-guide`, `@theme-ui/tailwind`, `@theme-ui/theme-provider`, `theme-ui`, `@theme-ui/typography`
  - Merge remote-tracking branch 'upstream/develop' into fix/color-scheme-media-query-api-update [#981](https://github.com/system-ui/theme-ui/pull/981) ([@draekien](https://github.com/draekien))

#### 🏠 Internal

- docs(components): Include form control color names [#1982](https://github.com/system-ui/theme-ui/pull/1982) ([@lachlanjc](https://github.com/lachlanjc))

#### Authors: 6

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Julian Benegas ([@julianbenegas](https://github.com/julianbenegas))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Lennart ([@LekoArts](https://github.com/LekoArts))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))
- William Pei ([@draekien](https://github.com/draekien))

---

# v0.11.3 (Fri Sep 24 2021)

#### 🐛 Bug Fix

- `@theme-ui/components`
  - Patch GridProps [#1933](https://github.com/system-ui/theme-ui/pull/1933) ([@aaronadamsCA](https://github.com/aaronadamsCA))

#### Authors: 1

- Aaron Adams ([@aaronadamsCA](https://github.com/aaronadamsCA))

---

# v0.11.2 (Wed Sep 08 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, Matt Gleich ([@gleich](https://github.com/gleich)), for all your work!

#### 🐛 Bug Fix

- `@theme-ui/preset-sketchy`
  - fix(preset-sketchy): fix emitted types [#1924](https://github.com/system-ui/theme-ui/pull/1924) ([@hasparus](https://github.com/hasparus))

#### 👨‍💻 Minor changes

- `@theme-ui/color-modes`, `@theme-ui/color`, `@theme-ui/components`, `@theme-ui/core`, `@theme-ui/css`, `@theme-ui/custom-properties`, `@theme-ui/editor`, `gatsby-plugin-theme-ui`, `gatsby-theme-style-guide`, `gatsby-theme-ui-layout`, `@theme-ui/match-media`, `@theme-ui/mdx`, `@theme-ui/parse-props`, `@theme-ui/preset-base`, `@theme-ui/preset-bootstrap`, `@theme-ui/preset-bulma`, `@theme-ui/preset-dark`, `@theme-ui/preset-deep`, `@theme-ui/preset-funk`, `@theme-ui/preset-future`, `@theme-ui/preset-polaris`, `@theme-ui/preset-roboto`, `@theme-ui/preset-sketchy`, `@theme-ui/preset-swiss`, `@theme-ui/preset-system`, `@theme-ui/preset-tailwind`, `@theme-ui/preset-tosh`, `@theme-ui/presets`, `@theme-ui/prism`, `@theme-ui/sidenav`, `@theme-ui/style-guide`, `@theme-ui/tachyons`, `@theme-ui/tailwind`, `@theme-ui/theme-provider`, `theme-ui`, `@theme-ui/typography`
  - Merge remote-tracking branch 'origin/stable' into develop ([@hasparus](https://github.com/hasparus))

#### 🏠 Internal

- docs(examples/next): showcase automatic runtime pragma comment in document.js [#1923](https://github.com/system-ui/theme-ui/pull/1923) ([@hasparus](https://github.com/hasparus))
- docs(examples/next): use TS, variants and improve contrast [#1923](https://github.com/system-ui/theme-ui/pull/1923) ([@hasparus](https://github.com/hasparus))
- docs: correct location of `initialColorModeName: 'light'` [#1922](https://github.com/system-ui/theme-ui/pull/1922) ([@gleich](https://github.com/gleich))

#### Authors: 2

- Matt Gleich ([@gleich](https://github.com/gleich))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.11.1 (Wed Aug 25 2021)



---

# v0.11.0 (Wed Aug 25 2021)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Torne Wuff ([@tornewuff](https://github.com/tornewuff))

:heart: Jordie Bodlay ([@jordie23](https://github.com/jordie23))

### Release Notes

#### Fixed a long-standing bug with color modes in nested providers ([#1456](https://github.com/system-ui/theme-ui/issues/1456))

#### Added @theme-ui/css/utils with TypeScript CIF functions and fix preset types ([#1862](https://github.com/system-ui/theme-ui/pull/1862))

- Added TypeScript
  [Constrained identity functions](https://kentcdodds.com/blog/how-to-write-a-constrained-identity-function-in-typescript)
  `makeTheme`, `makeStyles` and `makeColorsScale` which can be imported from
  _@theme-ui/css/utils_.
- Used aformentioned functions to properly define types of presets. Exported
  themes are now assignable to _Theme_ but their types narrowly describe their
  exact values.

---

---

#### 🚀 Enhancement

- `@theme-ui/color`, `@theme-ui/css`, `@theme-ui/preset-base`,
  `@theme-ui/preset-bootstrap`, `@theme-ui/preset-bulma`,
  `@theme-ui/preset-dark`, `@theme-ui/preset-deep`, `@theme-ui/preset-funk`,
  `@theme-ui/preset-future`, `@theme-ui/preset-polaris`,
  `@theme-ui/preset-roboto`, `@theme-ui/preset-sketchy`,
  `@theme-ui/preset-swiss`, `@theme-ui/preset-system`,
  `@theme-ui/preset-tailwind`, `@theme-ui/preset-tosh`, `@theme-ui/presets`
  - Add @theme-ui/css/utils with TypeScript CIF functions and fix preset types
    [#1862](https://github.com/system-ui/theme-ui/pull/1862)
    ([@tornewuff](https://github.com/tornewuff)
    [@hasparus](https://github.com/hasparus))
- `@theme-ui/color-modes`, `@theme-ui/core`, `@theme-ui/editor`,
  `@theme-ui/theme-provider`, `theme-ui`
  - fix(color-modes): combine colors in nested providers
    [#1838](https://github.com/system-ui/theme-ui/pull/1838)
    ([@hasparus](https://github.com/hasparus))

#### 🐛 Bug Fix

- Update global-styles.mdx
  [#1858](https://github.com/system-ui/theme-ui/pull/1858)
  ([@jordie23](https://github.com/jordie23))
- `@theme-ui/core`, `@theme-ui/css`
  - add types for css prop back
    [#1866](https://github.com/system-ui/theme-ui/pull/1866)
    ([@hasparus](https://github.com/hasparus))
- `@theme-ui/color-modes`, `@theme-ui/components`, `@theme-ui/core`,
  `@theme-ui/editor`, `gatsby-theme-style-guide`, `gatsby-theme-ui-layout`,
  `@theme-ui/match-media`, `@theme-ui/mdx`, `@theme-ui/parse-props`,
  `@theme-ui/sidenav`, `@theme-ui/style-guide`, `@theme-ui/theme-provider`,
  `theme-ui`
  - 0.10 chores [#1842](https://github.com/system-ui/theme-ui/pull/1842)
    ([@hasparus](https://github.com/hasparus))

#### 👨‍💻 Minor changes

- Remove dependabot from the changelog
  ([@hasparus](https://github.com/hasparus))

#### 🏠 Internal

- docs: add `@theme-ui/css` to sidebar and packages page
  [#1877](https://github.com/system-ui/theme-ui/pull/1877)
  ([@hasparus](https://github.com/hasparus))
- docs: change intro code snippets to TypeScript
  [#1877](https://github.com/system-ui/theme-ui/pull/1877)
  ([@hasparus](https://github.com/hasparus))
- `@theme-ui/css`
  - refactor(css): remove unused imports
    [#1877](https://github.com/system-ui/theme-ui/pull/1877)
    ([@hasparus](https://github.com/hasparus))
- `@theme-ui/core`, `@theme-ui/css`
  - docs(css): add usage examples for core packages
    [#1877](https://github.com/system-ui/theme-ui/pull/1877)
    ([@hasparus](https://github.com/hasparus))
- `theme-ui`
  - Setup Cypress [#1845](https://github.com/system-ui/theme-ui/pull/1845)
    ([@hasparus](https://github.com/hasparus))

#### 📝 Documentation

- Add redirects back to docs.
  [#1841](https://github.com/system-ui/theme-ui/pull/1841)
  ([@hasparus](https://github.com/hasparus))

#### 🔩 Dependency Updates

- `@theme-ui/prism`
  - Update snapshots [#1768](https://github.com/system-ui/theme-ui/pull/1768)
    ([@lachlanjc](https://github.com/lachlanjc))

#### Authors: 4

- Jordie Bodlay ([@jordie23](https://github.com/jordie23))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))
- Torne Wuff ([@tornewuff](https://github.com/tornewuff))

---

# v0.10.0 (Sat Jun 19 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, Vlad Shcherbin ([@vladshcherbin](https://github.com/vladshcherbin)),
for all your work!

### Release Notes

#### Allow easy styling autofilled of Inputs ([#1811](https://github.com/system-ui/theme-ui/pull/1811))

Background color of autofilled inputs will now default to
`theme.colors.background`. It can be changed by setting
`autofillBackgroundColor` prop.

---

#### 🚀 Enhancement

#### 🐛 Bug Fix

- Fix typo [#1835](https://github.com/system-ui/theme-ui/pull/1835)
  ([@vladshcherbin](https://github.com/vladshcherbin))
- `@theme-ui/color-modes`, `@theme-ui/components`, `@theme-ui/editor`,
  `theme-ui`
  - Allow easy styling autofilled of Inputs
    [#1811](https://github.com/system-ui/theme-ui/pull/1811)
    ([@hasparus](https://github.com/hasparus))
- `@theme-ui/color`, `@theme-ui/css`
  - fix(css): add JSDoc comment to sx.label
    [#1813](https://github.com/system-ui/theme-ui/pull/1813)
    ([@hasparus](https://github.com/hasparus))
- `@theme-ui/color`, `@theme-ui/components`, `@theme-ui/css`,
  `@theme-ui/custom-properties`, `@theme-ui/editor`, `gatsby-theme-style-guide`,
  `@theme-ui/preset-bootstrap`, `@theme-ui/preset-bulma`,
  `@theme-ui/preset-dark`, `@theme-ui/preset-deep`, `@theme-ui/preset-funk`,
  `@theme-ui/preset-future`, `@theme-ui/preset-polaris`,
  `@theme-ui/preset-roboto`, `@theme-ui/preset-sketchy`,
  `@theme-ui/preset-swiss`, `@theme-ui/preset-system`,
  `@theme-ui/preset-tailwind`, `@theme-ui/style-guide`
  - Add missing meta repository to published packages
    [#1807](https://github.com/system-ui/theme-ui/pull/1807)
    ([@aaronadamsCA](https://github.com/aaronadamsCA))
  - Add missing repository metadata to published packages
    [#1779](https://github.com/system-ui/theme-ui/pull/1779)
    ([@aaronadamsCA](https://github.com/aaronadamsCA))

#### 🏠 Internal

- Docs: update JSX pragma guide with automatic runtime section
  [#1718](https://github.com/system-ui/theme-ui/pull/1718)
  ([@flo-sch](https://github.com/flo-sch)
  [@hasparus](https://github.com/hasparus))
- docs: fix DocSearch not loading in SSR
  ([@hasparus](https://github.com/hasparus))
- Docs: Move homepage to root path
  [#1783](https://github.com/system-ui/theme-ui/pull/1783)
  ([@lachlanjc](https://github.com/lachlanjc))
- `@theme-ui/components`
  - docs(components): fix Paragraph default variant
    [#1795](https://github.com/system-ui/theme-ui/pull/1795)
    ([@bernharduw](https://github.com/bernharduw))

#### Authors: 6

- Aaron Adams ([@aaronadamsCA](https://github.com/aaronadamsCA))
- Bernhard Gschwantner ([@bernharduw](https://github.com/bernharduw))
- Florent SCHILDKNECHT ([@flo-sch](https://github.com/flo-sch))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))
- Vlad Shcherbin ([@vladshcherbin](https://github.com/vladshcherbin))

---

# v0.9.1 (Wed May 26 2021)

#### 🐛 Bug Fix

- `@theme-ui/components`
  - fix: Allow overriding Paragraph margins via theme
    [#1775](https://github.com/system-ui/theme-ui/pull/1775)
    ([@bernharduw](https://github.com/bernharduw))

#### Authors: 1

- Bernhard Gschwantner ([@bernharduw](https://github.com/bernharduw))

---

# v0.9.0 (Tue May 25 2021)

### Release Notes

#### modernize Babel config ([#1721](https://github.com/system-ui/theme-ui/pull/1721))

Theme UI packages became lighter! Built source code is now 9.5 kB (34%) smaller.

The trade-off is, Babel config has changed and it no longer supports Internet
Explorer 11. If you need to support legacy browsers, you can transpile
node_modules (e.g. with
[next-transpile-modules](https://github.com/martpie/next-transpile-modules)).

- [See build raport with size comparison for each package](https://github.com/system-ui/theme-ui/runs/2618450614)
- [Inspect updated Babel config](https://github.com/system-ui/theme-ui/blob/develop/babel.config.js)
- [Visit Bundlephobia](https://bundlephobia.com/result?p=theme-ui@0.9.0)

---

#### 🚀 Enhancement

- `@theme-ui/preset-base`, `@theme-ui/preset-bootstrap`, `@theme-ui/sidenav`,
  `@theme-ui/typography`
  - modernize Babel config
    [#1721](https://github.com/system-ui/theme-ui/pull/1721)
    ([@hasparus](https://github.com/hasparus))

#### 🐛 Bug Fix

- `@theme-ui/components`
  - fix(components): set Select's bgColor to "background" - fixes dark mode
    ([@hasparus](https://github.com/hasparus))

#### 📝 Documentation

- style DocSearch [#1714](https://github.com/system-ui/theme-ui/pull/1714)
  ([@atanasster](https://github.com/atanasster)
  [@hasparus](https://github.com/hasparus))

#### Authors: 2

- Atanas Stoyanov ([@atanasster](https://github.com/atanasster))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.8.4 (Thu May 06 2021)

#### 🐛 Bug Fix

- `@theme-ui/theme-provider`
  - fix(theme-provider): set body margin to 0
    ([@hasparus](https://github.com/hasparus))

#### ⚠️ Pushed to `stable`

- `@theme-ui/theme-provider`
  - Merge branch 'develop' into stable
    ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.8.3 (Wed May 05 2021)

#### 🐛 Bug Fix

- `@theme-ui/color-modes`
  - fix(color-modes): stop showing current color mode as initial mode in
    rawColors.modes ([@hasparus](https://github.com/hasparus))

#### ⚠️ Pushed to `stable`

- `@theme-ui/color-modes`, `@theme-ui/color`, `@theme-ui/components`,
  `@theme-ui/core`, `@theme-ui/css`, `@theme-ui/custom-properties`,
  `@theme-ui/editor`, `gatsby-plugin-theme-ui`, `gatsby-theme-code-recipes`,
  `gatsby-theme-style-guide`, `gatsby-theme-ui-layout`, `@theme-ui/match-media`,
  `@theme-ui/mdx`, `@theme-ui/parse-props`, `@theme-ui/preset-base`,
  `@theme-ui/preset-bootstrap`, `@theme-ui/preset-bulma`,
  `@theme-ui/preset-dark`, `@theme-ui/preset-deep`, `@theme-ui/preset-funk`,
  `@theme-ui/preset-future`, `@theme-ui/preset-polaris`,
  `@theme-ui/preset-roboto`, `@theme-ui/preset-sketchy`,
  `@theme-ui/preset-swiss`, `@theme-ui/preset-system`,
  `@theme-ui/preset-tailwind`, `@theme-ui/preset-tosh`, `@theme-ui/presets`,