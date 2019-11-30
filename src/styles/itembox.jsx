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
  width: 300px;
  height: 250px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.25s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.16), 0 3px 14px rgba(0, 0, 0, 0.23);
  }

  margin: 1rem;
`;

export const ItemBoxImage = styled.img`
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;
export const ItemBoxSpan = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
`;
