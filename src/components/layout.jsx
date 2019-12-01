import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import { layout, StyledA } from './../styles';
import BuyMeACoffee from './buymeacoffee';
import { GlobalCss } from './global';
import './global.css';

const Layout = props => {
  const { children } = props;
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <GlobalCss />
      <Header siteTitle={data.site.siteMetadata.title} />

      <Main>{children}</Main>

      <BuyMeACoffee />

      <Footer>
        <FooterText>
          PaintChart © {new Date().getFullYear()} All Rights Reserved.
          <br />
          Made with ❤ in Seoul
        </FooterText>
        <div>
          <StyledA href="https://www.facebook.com/paintchart/">
            <img alt="facebook" src="/img/icon/fb.svg" width="24" height="24" />
          </StyledA>
        </div>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Main = styled.main`
  flex: 1;
  ${layout}
`;
const Footer = styled.footer`
  ${layout}
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  color: #ffffff;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
const FooterText = styled.div`
  line-height: 1.5;
  font-weight: bold;
`;

export default Layout;
