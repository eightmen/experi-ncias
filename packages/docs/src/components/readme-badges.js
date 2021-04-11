/** @jsx jsx */
import { jsx } from 'theme-ui'

// Straight-up copied from README.md
// We may extract it from that Markdown file in a fancy way some day. Maybe...
export default function ReadmeBadges() {
  return (
    <div
      data-testid="readme-badges"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px',
        '> a': { height: '20px' },
      }}>
      <a href="https://github.com/system-ui/theme-ui">
        <img
          src="https://badgen.net/badge/-/github?icon=github&label"
          alt="GitHub"
        />
      </a>
      <a href="https://github.com/system-ui/theme-ui/stargazers">
        <img
          src="https://badgen.net/github/stars/system-ui/theme-ui"
          alt="GitHub Stars"
        />
      </a>
      <a>
        <img
          alt="npm (late