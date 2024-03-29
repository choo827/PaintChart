import React, { useState, useMemo } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import file from '../data/themes.json';

import styled, { keyframes } from 'styled-components';
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
            <ItemBoxImage
              width="128"
              height="128"
              alt={`${file[0]} theme thumbnail`}
              src={file[1].imageUrl}
            />
            <ItemBoxSpan>{file[1].name}</ItemBoxSpan>
          </ItemBox>
        </ItemBoxContainer>
      )),
    [file]
  );

  return (
    <Layout>
      <SEO
        title="PaintChart - Make your own chart."
        description="PaintChart is a TradingView chart theme collection site. Make your own unique chart so that people can listen to your chart analysis."
        image="https://paintchart.app/img/logo/logo-white.png"
      />
      <SliderWrapper>
        Make your own
        <Slider>
          <SlideText1 active>TradingView</SlideText1>
          <SlideText2>
            Bitcoin
            <span role="img" aria-label="stock" aria-labelledby="stock">
              ⛓
            </span>
          </SlideText2>
          <SlideText3>
            Stock
            <span role="img" aria-label="stock" aria-labelledby="stock">
              🔺
            </span>
          </SlideText3>
        </Slider>
        chart.
      </SliderWrapper>
      <StyledContainer>{renderFile}</StyledContainer>
    </Layout>
  );
};

const roll = keyframes`
  0% {
    margin-top: -35rem;
  }
  5% {
    margin-top: -17.5rem;
  }
  /* 5% delay */
  33% {
    margin-top: -17.5rem;
  }
  38% {
    margin-top: -8.75rem;
  }
  /* 5% delay */
  66% {
    margin-top: -8.75rem;
  }
  71% {
    margin-top: 0;
  }
  /* 5% delay */
  100% {
    margin-top: 0;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SliderWrapper = styled.div`
  margin-top: 15rem;
  margin-bottom: 12rem;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Slider = styled.div`
  height: 4.375rem;
  overflow: hidden;
`;

const SlideText1 = styled.div`
  background: #2196f3;
  animation: ${roll} 7s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  margin-bottom: 4.375rem;
  padding: 2px 15px;
  text-align: center;
  box-sizing: border-box;
`;

const SlideText2 = styled.span`
  background: #ff9500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  margin-bottom: 4.375rem;
  padding: 2px 15px;
  text-align: center;
  box-sizing: border-box;
`;

const SlideText3 = styled.span`
  background: #2ecc40;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  margin-bottom: 4.375rem;
  padding: 2px 15px;
  text-align: center;
  box-sizing: border-box;
`;

export default IndexPage;
