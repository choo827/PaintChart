import React from 'react';
import styled from 'styled-components';
import { layout, StyledLink } from '../styles';

const Header = () => (
  <StyledHeader>
    <PropertyContainer>
      <StyledLink
        fontWeight="bold"
        style={{ fontSize: '1.25rem' }}
        className="logo"
        to="/"
      >
        PaintChart
      </StyledLink>
      <StyledUl>
        <li>
          <StyledLink fontWeight="bold" to="/how-2-use">
            How to use?
          </StyledLink>
        </li>
      </StyledUl>
    </PropertyContainer>
  </StyledHeader>
);

const StyledHeader = styled.header`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
`;
const PropertyContainer = styled.div`
  // ${layout}
  width: 100%;
  margin-left: 15rem;
  margin-right: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledUl = styled.ul`
  display: flex;
  list-style: none;
`;

export default Header;
