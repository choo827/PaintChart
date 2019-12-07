import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	FacebookShareButton,
	TwitterShareButton,
} from 'react-share';

import {
	FacebookIcon,
	TwitterIcon,
} from 'react-share';

const Share = (props) => (
		<SocialShareContainer>
			<TwitterWrapper>
				<TwitterShareButton
						url={props.url}
						title={props.title}>
					<img
							alt="facebook"
							src="/img/icon/twitter_b.svg"
							width="32"/>
				</TwitterShareButton>
			</TwitterWrapper>
			<FacebookWrapper>
				<FacebookShareButton
						url={props.url}
						title={props.title}>
					<img
							role="button"
							alt="facebook"
							src="/img/icon/fb_b.svg"
							width="32"/>
				</FacebookShareButton>
			</FacebookWrapper>
		</SocialShareContainer>
);

const SocialShareContainer = styled.div`
  display: flex;
`;

const TwitterWrapper = styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
`;
const FacebookWrapper = styled.div`
  cursor: pointer;
`;

export default Share;