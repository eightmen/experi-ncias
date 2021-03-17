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
  const [menuOpe