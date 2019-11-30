/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import fbIcon from "./../images/img/icon/fb.svg"
import { layout } from "../styles/layout"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Main = styled.main`
  ${layout}
`
const Footer = styled.footer`
  ${layout}
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          width: "100%",
        }}
      >
        <Main>{children}</Main>
        <Footer>
          <div>
            © PaintChart {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            <br />
            Made with ❤ in Seoul
          </div>
          <div>
            <a href="https://www.facebook.com/paintchart/">
              <img
                alt="facebook-icon"
                src={"../../img/icon/fb.svg"}
                width="24"
                height="24"
              ></img>
            </a>
          </div>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
