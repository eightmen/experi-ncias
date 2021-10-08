// @ts-check
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Themed } from '@theme-ui/mdx'
import { graphql, Link } from 'gatsby'

import { Cards } from '../..'

export const query = graphql`
  {
    allSitePage(filter: { path: { glob: "/recipes/*" } }) {
      nodes {
        id
        path
        pageContext
      }
    }
  }
`

const RecipeListItem = ({ id, pageContext, path }) => {
  const {
    frontmatter: { name },
  } = pageContext

  return (
    <Themed.li>
      {/* TODO: Cards with rende