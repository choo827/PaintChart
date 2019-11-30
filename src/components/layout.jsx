import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import { StyledA, layout } from './../styles';
import { GlobalCss } from './global';
import './layout.css';

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

      <Footer>
        <FooterText>
          © PaintChart {new Date().getFullYear()}, Built with{' '}
          <StyledA
            fontWeight={'bold'}
            color="skyblue"
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </StyledA>
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
  height: 100%;
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
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
`;
const FooterText = styled.div`
  line-height: 2;
`;

export default Layout;
