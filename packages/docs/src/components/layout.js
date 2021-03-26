/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, useColorMode } from 'theme-ui'
import { useState, useRef, useEffect, Suspense, useTransition } from 'react'
import { Flex, Box } from '@theme-ui/components'
import { AccordionNav } from '@theme-ui/sidenav'
import { Link } from 'gatsby'

import SkipLink from './skip-link'
import Pagination from './pagination'
import EditLink from './edit-link'
import Head from './head'
import MenuButton from './menu-button'
import NavLink from './nav-link'
import Button from './button'
import SearchInput from './search-input'
import Sidebar from '../sidebar.mdx'

const modes = ['default', 'dark', 'deep', 'swiss']

const sidebar = {
  wrapper: AccordionNav,
  a: NavLink,
}

const getModeName = (mode) => {
  switch (mode) {
    case 'dark':
      return 'Dark'
    case 'deep':
      return 'Deep'
    case 'swiss':
      return 'Swiss'
    case 'light':
    case 'default':
      return 'Light'
    case undefined:
      return '         '
    default:
      return mode
  }
}

export default function DocsLayout(props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mode, setMode] = useColorMode()

  const { pathname } = props.location
  const isLanding = pathname === '/'

  const fullwidth =
    isLanding ||
    (props.pageContext.frontmatter && props.pageContext.frontmatter.fullwidth)

  const showNav = !props.pageContext?.frontmatter?.hidenav

  const nextColorMode = modes[(modes.indexOf(mode) + 1) % modes.length]

  return (
    <Fragment>
      <Head {...props} />
      <SkipLink>Skip to content</SkipLink>
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {showNav && (
          <Flex
            as="header"
            sx={{
              zIndex: 1,
              height: 64,
              px: 3,
              alignItems: 'center',
              justifyContent: 'space-between',
              position: isLanding ? 'initial' : 'sticky',
              top: 0,
              background: 'background',
            }}
          >
            <Flex sx={{ alignItems: 'center' }}>
              <MenuButton
                onClick={(e) => {
                  setMenuOpen(!menuOpen)
                }}
              />
              <Link to="/" sx={{ variant: 'links.nav' }}>
                Theme UI
              </Link>
            </Flex>
            <Suspense>
              <Flex sx={{ gap: [0, 2] }}>
                <SearchInput />
                <Flex sx={{ alignItems: 'center' }}>
                  <NavLink href="https://github.com/system-ui/theme-ui">
                    GitHub
                  </NavLink>
                  <Button
                    aria-label={`Change color mode to ${nextColorMode}`}
                    sx={{
                      ml: 2,
                      whiteSpace: 'pre',
                    }}
                    onClick={() => setMode(nextColorMode)}
                  >
                    {getModeName(mode)}
                  </Button>
                </Flex>
              </Flex>
            </Suspense>
          </Flex>
        )}
        <Box
          sx={{
            flex: '1 1 auto',
            alignItems: 'flex-start',
            display: ['block', 'flex'],
            height: '100%',
          }}
        >
          <Sidebar
            role="navigation"
            onFocus={(e) => {
              setMenuOpen(true)
            }}
            onBlur={(e) => {
              setMenuOpen(false)
            }}
            onClick={(e) => {
              setMenuOpen(false)
            }}
            onKeyPress={(e) => {
              setMenuOpen(false)
            }}
            open={menuOpen}
            components={sidebar}
            pathname={pathname}
            sx={{
              background: 'background',
              display: [null, fullwidth ? 'none' : 'block'],
              width: 256,
              flex: 'none',
              maxHeight: ['100%', 'calc(100vh - 64px)'],
              overflowY: 'auto',
              px: 3,
              pt: 3,
              pb: 4,
              mt: [64, 0],
              position: [null, 'sticky'],
              top: [null, '64px'],
            }}
          />
          <div
            sx={{
              width: '100%',
              minWidth: 0,

              position: 'relative',
            }}
          >
            {!isLanding && <HeaderScrollShadow />}
            <main
              id="content"
              sx={{
                maxWidth: fullwidth ? 'none' : 768,
                mx: 'auto',
                px: fullwidth ? 0 : 3,
              }}
            >
              {props.children}
              <EditLink />
              {!fullwidth && <Pagination />}
            </main>
          </div>
        </Box>
      </Flex>
    </Fragment>
  )
}

function HeaderScrollShadow() {
  const ref = useRef()

  useEffect(() => {
    const onScroll = () => {
      const { current } = ref
      if (current) {
        current.style.opacity = window.scrollY > 0 ? 1 : 0
      }
    }

    window.addE