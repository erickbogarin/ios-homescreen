import React from 'react'
import { Global } from '@emotion/core'

import globalStyles from 'config/global'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <Global styles={globalStyles} />
    {children}
  </React.Fragment>
)

export default Layout
