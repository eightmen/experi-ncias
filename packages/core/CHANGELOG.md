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

- fix: add missing deepmerge dependency ([@hasparus](https://github.com/hasparus))

#### 👨‍💻 Minor changes

- docs: Write migration notes for v0.13 ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.12.0 (Thu Oct 28 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, William Pei ([@draekien](https://github.com/draekien)), for all your work!

#### 🚀 Enhancement


#### 🐛 Bug Fix

- Merge remote-tracking branch 'upstream/develop' into fix/color-scheme-media-query-api-update [#981](https://github.com/system-ui/theme-ui/pull/981) ([@draekien](https://github.com/draekien))

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

- add types for css prop back [#1866](https://github.com/system-ui/theme-ui/pull/1866) ([@hasparus](https://github.com/hasparus))
- fix(core): add `css` prop back to JSX types ([@hasparus](https://github.com/hasparus))
- 0.10 chores [#1842](https://github.com/system-ui/theme-ui/pull/1842) ([@hasparus](https://github.com/hasparus))
- fix(color-modes): properly combine colors from nested providers ([@hasparus](https://github.com/hasparus))

#### 🏠 Internal

- docs(css): add usage examples for core packages [#1877](https://github.com/system-ui/theme-ui/pull/1877) ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.10.0 (Sat Jun 19 2021)

#### 🏠 Internal

- Docs: update JSX pragma guide with automatic runtime section [#1718](https://github.com/system-ui/theme-ui/pull/1718) ([@flo-sch](https://github.com/flo-sch) [@hasparus](https://github.com/hasparus))

#### Authors: 2

- Florent SCHILDKNECHT ([@flo-sch](https://github.com/flo-sch))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.8.3 (Wed May 05 2021)

#### ⚠️ Pushed to `stable`

- Merge branch 'stable' into develop ([@hasparus](https://github.com/hasparus))

#### Authors: 1

- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.8.1 (Wed May 05 2021)

#### 🐛 Bug Fix

- Wrap top level ThemeProvider in CacheProvider [#1717](https://github.com/system-ui/theme-ui/pull/1717) ([@hasparus](https://github.com/hasparus) [@Zolwiastyl](https://github.com/Zolwiastyl))

#### Authors: 2

- [@Zolwiastyl](https://github.com/Zolwiastyl)
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.8.0 (Wed May 05 2021)

:tada: This release contains work from a new contributor! :tada:

Thank you, null[@Zolwiastyl](https://github.com/Zolwiastyl), for all your work!

#### 🚀 Enhancement

- v0.8 [#1688](https://github.com/system-ui/theme-ui/pull/1688) ([@lachlanjc](https://github.com/lachlanjc) [@hasparus](https://github.com/hasparus))
- feat(css): remove deprecated theme.useBodyStyles ([@hasparus](https://github.com/hasparus))

#### 🐛 Bug Fix

- Wrap top level ThemeProvider in CacheProvider [#1717](https://github.com/system-ui/theme-ui/pull/1717) ([@hasparus](https://github.com/hasparus) [@Zolwiastyl](https://github.com/Zolwiastyl))
- fix(core): add missing dependency @emotion/cache ([@hasparus](https://github.com/hasparus))
- test(core): use a dumber, but cleaner mock ([@hasparus](https://github.com/hasparus))
- fix(core): wrap top level ThemePovider with CacheProvider from Emotion ([@Zolwiastyl](https://github.com/Zolwiastyl))
- wip(core): test if ThemeProvider is on top level ([@hasparus](https://github.com/hasparus))
- Merge remote-tracking branch 'origin/develop' into v0.8 ([@hasparus](https://github.com/hasparus))
- Merge branch 'stable' into config-2 ([@hasparus](https://github.com/hasparus))
- Merge branch 'config' into config-2 [#1421](https://github.com/system-ui/theme-ui/pull/1421) ([@hasparus](https://github.com/hasparus))
- Merge branch 'develop' into config ([@lachlanjc](https://github.com/lachlanjc))
- Begin moving theme config options ([@lachlanjc](https://github.com/lachlanjc))

#### ⚠️ Pushed to `stable`

- Merge branch 'stable' into develop ([@hasparus](https://github.com/hasparus))

#### Authors: 4

- [@Zolwiastyl](https://github.com/Zolwiastyl)
- Brent Jackson ([@jxnblk](https://github.com/jxnblk))
- Lachlan Campbell ([@lachlanjc](https://github.com/lachlanjc))
- Piotr Monwid-Olechnowicz ([@hasparus](https://github.com/hasparus))

---

# v0.7.5 (Wed Apr 28