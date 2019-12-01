import styled from 'styled-components';
import { Link } from 'gatsby';

export const ItemBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const ItemBox = styled(Link)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 1.5rem;
  margin: 2rem;
  border-radius: 4px;
  box-shadow: 0 0.5rem 1.5rem #aaaaaa;
  transition: 0.25s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.16), 0 3px 14px rgba(0, 0, 0, 0.23);
  }
  padding: 1.5rem;
`;

export const ItemBoxImage = styled.img`
  border-radius: 0.25rem;
`;
export const ItemBoxSpan = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: black;
  text-decoration: none;
  padding-top: 1rem;
`;
