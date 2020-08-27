import React from "react"
import PropTypes from "prop-types"

import Nav from "./nav"
import Seo from "./seo"
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Seo title="" />
      <Nav />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
