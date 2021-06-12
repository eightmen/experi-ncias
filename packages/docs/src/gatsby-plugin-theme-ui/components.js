/** @jsx jsx */
import { jsx } from 'theme-ui'
import code from '../components/code'
import Note from '../components/note'

const heading = (Tag) => (props) =>
  !!props.id ? (
    <Tag {...props}>
      <a
        href={`#${props.id}`}
        sx={{
          color: 'inherit',
          textDecoration: 'none',
          ':hover': {
            textDecoration: 'underline',
          },
        }}>
        {props.