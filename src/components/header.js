import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { layout } from "../styles/layout"

const Header = () => (
  <StyledHeader>
    <PropertyContainer>
      <Link style={{ fontSize: "1.25rem" }} className="logo" to="/">
        <strong>PaintChart</strong>
      </Link>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li>
          <Link to="/how-2-use">
            <strong>How to use?</strong>
          </Link>
        </li>
      </ul>
    </PropertyContainer>
  </StyledHeader>
)

const StyledHeader = styled.header`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
`
const PropertyContainer = styled.div`
  ${layout}
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Header
