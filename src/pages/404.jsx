import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const NotFoundPage = () => (
		<Layout>
			<SEO title="Page Not found"/>
			<Title>404<br/>-</Title>
			<Contents>Page Not Found.</Contents>
		</Layout>
);

const Title = styled.h1`
  font-size: 12rem;
`;

const Contents = styled.p`
  font-weight: bold;
  font-size: 8rem;
`;


export default NotFoundPage;
