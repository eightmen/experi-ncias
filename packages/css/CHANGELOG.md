
# v0.13.1 (Wed Jan 05 2022)

#### 🐛 Bug Fix

- css: Make background a theme-aware property [#2056](https://github.com/system-ui/theme-ui/pull/2056) ([@lachlanjc](https://github.com/lachlanjc))

#### 🏠 Internal

- css: Make background a theme-aware property ([@lachlanjc](https://github.com/lachlanjc))

#### Authors: 4

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Akash ([@appsparkler](https://github.com/appsparkler))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.13.0 (Mon Dec 27 2021)

### Release Notes

#### Move Emotion and MDX packages to peerDeps ([#1867](https://github.com/system-ui/theme-ui/pull/1867))

**BREAKING CHANGE:** `@emotion/react` and `@mdx-js/react`  were moved to peerDependencies of `theme-ui`, `@theme-ui/mdx` and `@theme-ui/sidenav` and must be installed separately. This is a revert of change from Theme UI v0.3, and it's meant to help solve version clashes and context mismatch bugs on user side. Connected issues: [#1793](https://github.com/system-ui/theme-ui/issues/1793), [#1531](https://github.com/system-ui/theme-ui/issues/1531), [#1530](https://github.com/system-ui/theme-ui/issues/1530), [#1388](https://github.com/system-ui/theme-ui/issues/1388), [#1345](https://github.com/system-ui/theme-ui/issues/1345#issuecomment-742225675), [#1130](https://github.com/system-ui/theme-ui/issues/1130).

---

---

#### 🚀 Enhancement

- Move Emotion and MDX packages to peerDeps [#1867](https://github.com/system-ui/theme-ui/pull/1867) ([@hasparus](https://github.com/hasparus))
- feat(deps): move Emotion to peerDeps ([@hasparus](https://github.com/hasparus))

#### 🐛 Bug Fix

- fix(eslint): Add import/no-extraneous-dependencies and fix bad imports ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.12.0 (Thu Oct 28 2021)

:tada: This release contains work from new contributors! :tada:

Thanks for all your work!

:heart: Julian Benegas ([@julianbenegas](https://github.com/julianbenegas))

:heart: William Pei ([@draekien](https://github.com/draekien))

#### 🚀 Enhancement

- Use media query value when useColorSchemeMediaQuery is set to 'system' [#1981](https://github.com/system-ui/theme-ui/pull/1981) ([@julianbenegas](https://github.com/julianbenegas) [@draekien](https://github.com/draekien))
- feat(usecolorschememediaquery): added 'system' and 'initial' as valid types ([@draekien](https://github.com/draekien))

#### 🐛 Bug Fix

- Update packages/css/src/options.ts ([@draekien](https://github.com/draekien))
- Merge remote-tracking branch 'upstream/develop' into fix/color-scheme-media-query-api-update [#981](https://github.com/system-ui/theme-ui/pull/981) ([@draekien](https://github.com/draekien))
- fix(css): reexport CSSObject from @emotion/react ([@hasparus](https://github.com/hasparus))

#### Authors: 6

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Julian Benegas ([@julianbenegas](https://github.com/julianbenegas))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Lennart ([@LekoArts](https://github.com/LekoArts))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))
- William Pei ([@draekien](https://github.com/draekien))

---

# v0.11.0 (Wed Aug 25 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, Torne Wuff ([@tornewuff](https://github.com/tornewuff)), for all your work!

### Release Notes

#### Add @theme-ui/css/utils with TypeScript CIF functions and fix preset types ([#1862](https://github.com/system-ui/theme-ui/pull/1862))

- Added TypeScript [Constrained identity functions](https://kentcdodds.com/blog/how-to-write-a-constrained-identity-function-in-typescript) `makeTheme`, `makeStyles` and `makeColorsScale` which can be imported from _@theme-ui/css/utils_.
- Used aformentioned functions to properly define types of presets. Exported themes are now assignable to _Theme_ but their types narrowly describe their exact values.

---

---

#### 🚀 Enhancement

- Add @theme-ui/css/utils with TypeScript CIF functions and fix preset types [#1862](https://github.com/system-ui/theme-ui/pull/1862) ([@tornewuff](https://github.com/tornewuff) [@hasparus](https://github.com/hasparus))
- feat(css): add makeTheme constrained identity function ([@hasparus](https://github.com/hasparus))

#### 🐛 Bug Fix

- add types for css prop back [#1866](https://github.com/system-ui/theme-ui/pull/1866) ([@hasparus](https://github.com/hasparus))
- fix(core): add `css` prop back to JSX types ([@hasparus](https://github.com/hasparus))

#### 🏠 Internal

- refactor(css): remove unused imports [#1877](https://github.com/system-ui/theme-ui/pull/1877) ([@hasparus](https://github.com/hasparus))
- docs(css): add usage examples for core packages [#1877](https://github.com/system-ui/theme-ui/pull/1877) ([@hasparus](https://github.com/hasparus))

#### Authors: 2

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))
- Torne Wuff ([@tornewuff](https://github.com/tornewuff))

---

# v0.10.0 (Sat Jun 19 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, Vlad Shcherbin ([@vladshcherbin](https://github.com/vladshcherbin)), for all your work!

### Release Notes

#### Allow easy styling autofilled of Inputs ([#1811](https://github.com/system-ui/theme-ui/pull/1811))

Background color of autofilled inputs will now default to `theme.colors.background`. It can be changed by setting `autofillBackgroundColor` prop.