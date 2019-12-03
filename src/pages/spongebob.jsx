import React, { memo, useState } from 'react';
import BuyMeACoffee from '../components/buymeacoffee';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { copyText, invertColor } from '../helper';
import { SpongeBob } from '../data/themes.json';

import styled from 'styled-components';
import { PageAuthor, PageContainer, PageImage, PageTitle } from '../styles';

const files = Object.entries(SpongeBob.props);

const SpongeBobComponent = () => {
  const [file] = useState(files);

  return (
    <Layout>
      <SEO title="SpongeBob" />
      <PageContainer>
        <PageImage src={`/${SpongeBob.backgroundUrl}`} />
        <PageTitle>SpongeBob</PageTitle>
        <PageAuthor>by PaintChart</PageAuthor>

        <StyledContainer>
          <RenderItems file={file} />
        </StyledContainer>
      </PageContainer>

      <BuyMeACoffee />
    </Layout>
  );
};

const RenderItems = ({ file }) =>
  file.map(item => (
    <RenderItemBox key={item[0]}>
      <RenderItemTitle>{item[0]}</RenderItemTitle>
      <RenderItemTitle>-</RenderItemTitle>

      {Object.entries(item[1]).map((specific, idx) => (
        <RenderSpecific title={specific[0]} dataArray={specific[1]} key={idx} />
      ))}
    </RenderItemBox>
  ));
const RenderItemBox = styled.div`
  width: 18.75rem;
  margin: 5rem 2rem;
`;
const RenderItemTitle = styled.span`
  display: flex;
  margin-bottom: 1rem;
  font-size: 1.75rem;
  font-weight: bold;
`;

const RenderSpecific = ({ title, dataArray }) => (
  <RenderSpecificContainer>
    <RenderSpecificContainerTitle>{title}</RenderSpecificContainerTitle>
    {title === 'Color' ? (
      <RenderSpecificItemContainer>
        {dataArray.map((s, idx) => (
          <RenderSpecificItemColorContainer key={idx}>
            <RenderSpecificContainerItem color={s}>
              {s}
            </RenderSpecificContainerItem>
            <RenderSpecificContainerCopyButton onClick={() => copyText(s)}>
              Copy
            </RenderSpecificContainerCopyButton>
          </RenderSpecificItemColorContainer>
        ))}
      </RenderSpecificItemContainer>
    ) : (
      <RenderSpecificItemContainer>
        {dataArray.map((s, idx) => (
          <RenderSpecificContainerItem key={idx}>
            {s}
          </RenderSpecificContainerItem>
        ))}
      </RenderSpecificItemContainer>
    )}
  </RenderSpecificContainer>
);

const RenderSpecificContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
const RenderSpecificContainerTitle = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
const RenderSpecificItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
`;
const RenderSpecificItemColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const RenderSpecificContainerItem = styled.span`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ color }) => (color ? color === 'Default' ? 'black' : invertColor(color) : 'black')};
  ${({ color }) => (color ? `background-color: ${color};` : '')}
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 2px;
  padding-left: 2px;
`;
const RenderSpecificContainerCopyButton = styled.button`
  font-family: 'Alata', sans-serif;
  margin-top: 1rem;
  width: 64px;
  height: 42px;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: black;
  color: #fff;
  padding: 0 8px;
  border-radius: 0.5rem;
  font-weight: bold;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8rem;
`;

export default memo(SpongeBobComponent);
