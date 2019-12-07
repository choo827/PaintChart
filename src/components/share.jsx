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
			<FacebookShareButton
					url={props.url}
					title={props.title}>
				<img
						alt="facebook"
						src="/img/icon/fb_b.svg"
						width="32"/>
			</FacebookShareButton>
		</SocialShareContainer>
);

const SocialShareContainer = styled.div`
  display: flex;
`;

const TwitterWrapper = styled.div`
  margin-right: 0.5rem;
`;

export default Share;