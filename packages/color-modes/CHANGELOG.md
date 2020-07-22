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
- feat(color-modes): update client side effect so that it maintains existing behaviour ([@draekien](https://github.com/draekien))
- feat(color-modes): add media query event listeners and effects ([@draekien](https://github.com/draekien))

#### 🐛 Bug Fix

- Merge remote-tracking branch 'upstream/develop' into fix/color-scheme-media-query-api-update [#981](https://github.com/system-ui/theme-ui/pull/981) ([@draekien](https://github.com/draekien))
- fix(css): reexport CSSObject from @emotion/react ([@hasparus](https://github.com/hasparus))
- Check if function before executing. ([@julianbenegas](https://github.com/julianbenegas))
- use addEventListener instead of addListener ([@julianbenegas](https://github.com/julianbenegas))
- added media query listeners. added dependencies to effects ([@julianbenegas](https://github.com/julianbenegas))
- made media query win when useColorSchemeMediaQuery set to true ([@julianbenegas](https://github.com/julianbenegas))

#### Authors: 6

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Julian Benegas ([@julianbenegas](https://github.com/julianbenegas))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Lennart ([@LekoArts](https://github.com/LekoArts))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))
- William Pei ([@draekien](https://github.com/draekien))

---

# v0.11.0 (Wed Aug 25 2021)

#### 🚀 Enhancement

- fix(color-modes): combine colors in nested providers [#1838](https://github.com/system-ui/theme-ui/pull/1838) ([@hasparus](https://github.com/hasparus))

#### 🐛 Bug Fix

- fix(color-modes): respect html.theme-ui-{mode} class in nested providers to reduce FOUC ([@hasparus](https://github.com/hasparus))
- 0.10 chores [#1842](https://github.com/system-ui/theme-ui/pull/1842) ([@hasparus](https://github.com/hasparus))
- fix(color-modes): properly combine colors from nested providers ([@hasparus](https://github.com/hasparus))
- fix(color-modes): nest styles using css not style ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.10.0 (Sat Jun 19 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, Vlad Shcherbin ([@vladshcherbin](https://github.com/vladshcherbin)), for all your work!

### Release Notes

#### Allow easy styling autofilled of Inputs ([#1811](https://github.com/system-ui/theme-ui/pull/1811))

Background color of autofilled inputs will now default to `theme.colors.background`. It can be changed by setting `autofillBackgroundColor` prop.

---

#### 🚀 Enhancement


#### 🐛 Bug Fix

- Allow easy styling autofilled of Inputs [#1811](https://github.com/system-ui/theme-ui/pull/1811) ([@hasparus](https://github.com/hasparus))

#### 🏠 Internal

- Docs: update JSX pragma guide with automatic runtime section [#1718](https://github.com/system-ui/theme-ui/pull/1718) ([@flo-sch](https://github.com/flo-sch) [@hasparus](https://github.com/hasparus))
- docs: set <meta name='color-scheme' ([@hasparus](https://github.com/hasparus))

#### Authors: 4

- [@dependabot[bot]](https://github.com/dependabot[bot])
- Florent SCHILDKNECHT ([@flo-sch](https://github.com/flo-sch))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))
- Vlad Shcherbin ([@vladshcherbin](https://github.com/vladshcherbin))

---

# v0.8.3 (Wed May 05 2021)

#### 🐛 Bug Fix

- fix(color-modes): stop showing current color mode as initial mode in rawColors.modes ([@hasparus](https://github.com/hasparus))

#### ⚠️ Pushed to `stable`

- Merge branch 'stable' into develop ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.8.0 (Wed May 05 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, Francis Champagne ([@fcisio](https://github.com/fcisio)), for all your work!

#### 🚀 Enhancement

- v0.8 [#1688](https://github.com/system-ui/theme-ui/pull/1688) ([@lachlanjc](https://github.com/lachlanjc) [@hasparus](https://github.com/hasparus))
- Refactor color objects and expose default colors as a mode [#1639](https://github.com/system-ui/theme-ui/pull/1639) ([@fcisio](https://github.com/fcisio))
- feat(css): remove deprecated theme.useBodyStyles ([@hasparus](https://github.com/hasparus))
- feat: create the allColorModes object in the context ([@fcisio](https://github.com/fcisio))

#### 🐛 Bug Fix

-