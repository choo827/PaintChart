import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import { StyledA } from '../styles';

const HelpPage = () => (
  <Layout>
    <SEO title="How to use it?"/>
    <Heading>How to use<br/>PaintChart?<br/>-</Heading>
    <Steps>1. Choose your favorite theme in PaintChart.</Steps>
    <img
      width="100%"
      src="/img/how2use/pic1.png"
      alt="pic1"></img>
    <Steps>2. Copy color hex code and open<Highlight className="highlight"><Link
      href="https://www.tradingview.com/chart/"> TradingView </Link></Highlight>chart settings.</Steps>
    <img
      width="100%"
      src="/img/how2use/pic2.png"
      alt="pic2"></img>
    <Steps>3. Click color palette and click plus button to add color.</Steps>
    <img
      width="100%"
      src="/img/how2use/pic3.png"
      alt="pic3"></img>
    <Steps>4. Paste the copied color code to add the color. (NOT INCLUDE '#')</Steps>
    <img
      width="100%"
      src="/img/how2use/pic4.png"
      alt="pic4"></img>
    <Steps>5. Finish! You can add other colors like this way.</Steps>
    <Steps>(Option) You can save as a template.</Steps>
  </Layout>
);

const Heading = styled.h1`
  font-size: 4rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const Steps = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

const Highlight = styled.span`
  background: #2196f3;
`;

const Link = styled.a`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

export default HelpPage;
