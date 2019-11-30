import React, { useState, memo } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { invertColor, copyText } from '../helper';
import { Blackpink } from './../data/file.json';

import styled from 'styled-components';
import { PageContainer, PageImage, PageTitle, PageAuthor } from '../styles';

const files = Object.entries(Blackpink.props);

const BlackpinkComponent = () => {
  const [file] = useState(files);

  return (
    <Layout>
      <SEO title="Blackpink" />
      <PageContainer>
        <PageImage src={`/${Blackpink.backgroundUrl}`} />
        <PageTitle>Blackpink</PageTitle>
        <PageAuthor>by PaintChart</PageAuthor>

        <StyledContainer>
          <RenderItems file={file} />
        </StyledContainer>

        {/* 이 공간에 Bye me a coffee 작성 다른곳은 건드리면 터질듯 */}
      </PageContainer>
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
  width: 350px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10rem;
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
  margin-top: 24px;
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
  color: ${({ color }) => (color ? invertColor(color) : 'black')};
  ${({ color }) => (color ? `background-color: ${color};` : '')}
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 2px;
  padding-left: 2px;
`;
const RenderSpecificContainerCopyButton = styled.button`
  margin-top: 2rem;
  width: 80px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: black;
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-weight: bold;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default memo(BlackpinkComponent);
