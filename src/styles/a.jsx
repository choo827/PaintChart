import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
  color: ${({ color }) => (color ? color : 'black')};
  text-decoration: none;
`;

export const StyledA = styled.a`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'normal')};
  color: ${({ color }) => (color ? color : 'black')};
  text-decoration: none;
`;
