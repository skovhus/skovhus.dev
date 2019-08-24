import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ExternalLink = ({
  children,
  underline = true,
  linkTo,
}: {
  children: JSX.Element | string
  underline?: boolean
  linkTo: string
}) => (
  <OutboundLink
    href={linkTo}
    style={underline ? {} : { boxShadow: `none` }}
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    {children}
  </OutboundLink>
)

export default ExternalLink
