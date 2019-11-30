import React, { useState, useMemo } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import file from './../data/file.json';

import styled from 'styled-components';
import {
  ItemBoxContainer,
  ItemBox,
  ItemBoxImage,
  ItemBoxSpan,
} from './../styles';

const files = Object.entries(file);

const IndexPage = () => {
  const [file] = useState(files);

  const renderFile = useMemo(
    () =>
      file.map(file => (
        <ItemBoxContainer key={file[0]}>
          <ItemBox to={`/${file[0]}`}>
            <ItemBoxImage width="300" height="150" src={file[1].imageUrl} />
            <ItemBoxSpan>{file[0]}</ItemBoxSpan>
          </ItemBox>
        </ItemBoxContainer>
      )),
    [file]
  );

  return (
    <Layout>
      <SEO title="Main" />
      <StyledContainer>{renderFile}</StyledContainer>
    </Layout>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2.5rem;
`;

export default IndexPage;
