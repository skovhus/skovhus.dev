import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ExternalLink = ({
  children,
  noUnderline = false,
  linkTo,
}: {
  children: JSX.Element | string
  noUnderline?: boolean
  linkTo: string
}) => (
  <OutboundLink
    href={linkTo}
    style={noUnderline ? { boxShadow: `none` } : {}}
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    {children}
  </OutboundLink>
)

export default ExternalLink
