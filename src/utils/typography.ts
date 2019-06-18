import Typography from 'typography'
import baseTheme from 'typography-theme-wordpress-2016'

import './global-styles.css'

baseTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: 'none',
    },
    '.gatsby-resp-image-figcaption': {
      textAlign: 'center',
      fontSize: '0.8rem',
    },
    ul: {
      marginLeft: '2rem !important',
    },
    blockquote: {
      fontSize: '1em',
    },
    a: {
      color: 'var(--primary-color)',
    },
    'mark,ins': {
      background: 'var(--primary-color)',
    },
  }
}

delete baseTheme.googleFonts

const typography = new Typography(baseTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const { rhythm } = typography
export const { scale } = typography
