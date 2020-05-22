import React from 'react'
import { Global } from '@emotion/core'

import globalStyles from 'config/global'

const Layout = ({ children }) => (
  <React.Fragment>
    <Global styles={globalStyles} />
    {children}
  </React.Fragment>
)

export default Layout
