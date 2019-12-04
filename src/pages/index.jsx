import React, { useState, useMemo } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import file from '../data/themes.json';
import '../styles/index.css';

import styled from 'styled-components';
import {
  ItemBoxContainer,
  ItemBox,
  ItemBoxImage,
  ItemBoxSpan,
} from './../styles';

const files = Object.entries(file).sort((a, b) => {
  if (a[0].toLowerCase() > b[0].toLowerCase()) {
    return 1;
  } else if (a[0].toLowerCase() < b[0].toLowerCase()) {
    return -1;
  }
  return 1;
});

const IndexPage = () => {
  const [file] = useState(files);

  const renderFile = useMemo(
    () =>
      file.map(file => (
        <ItemBoxContainer key={file[0].toLowerCase()}>
          <ItemBox to={`/${file[0].trim().toLowerCase()}`}>
            <ItemBoxImage width="128" height="128" src={file[1].imageUrl}/>
            <ItemBoxSpan>{file[0]}</ItemBoxSpan>
          </ItemBox>
        </ItemBoxContainer>
      )),
    [file],
  );

  return (
    <Layout>
      <SEO
        title="PaintChart"/>
      <div className="slider-wrapper">
        Make your own
        <div className="slider">
          <div className="slider-text1">TradingView</div>
          <div className="slider-text2">Bitcoin ⛓</div>
          <div className="slider-text3">Stock 🔺</div>
        </div>
        chart.
      </div>
      <StyledContainer>{renderFile}</StyledContainer>
    </Layout>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default IndexPage;
