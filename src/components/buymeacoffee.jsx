import React from 'react';
import styled from 'styled-components';
import { layout, StyledA } from './../styles';

const BuyMeACoffee = () => (
  <BuyMeACoffeeDiv>
    <BuyMeACoffeeTitle>Do you like this theme?</BuyMeACoffeeTitle>
    <BuyMeACoffeeSubTitle role="img">
      If you like this theme.
      <span role="img" aria-label="circle">
        {' '}
        🎈{' '}
      </span>
      Buy developer a coffee to cheer!
      <span role="img" aria-label="missile">
        {' '}
        🎉{' '}
      </span>
    </BuyMeACoffeeSubTitle>

    <StyledA href="https://www.buymeacoffee.com/zGZMr2P" target="_blank">
      <img
        style={{ borderRadius: '4px' }}
        width="217"
        height="51"
        src="https://cdn.buymeacoffee.com/buttons/default-black.png"
        alt="Buy Me A Coffee"
      />
    </StyledA>
  </BuyMeACoffeeDiv>
);

const BuyMeACoffeeDiv = styled.div`
  ${layout}
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const BuyMeACoffeeTitle = styled.span`
  font-weight: bold;
  font-size: 2rem;

  margin-bottom: 2rem;
`;

const BuyMeACoffeeSubTitle = styled.span`
  font-weight: bold;
  font-size: 1.25rem;

  margin-bottom: 2rem;
`;

export default BuyMeACoffee;
