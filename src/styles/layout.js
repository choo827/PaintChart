import { css } from "styled-components"

export const layout = css`
  padding-right: 15rem;
  padding-left: 15rem;
  @media screen and (max-width: 425px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  @media screen and (min-width: 426px) and (max-width: 768px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding-right: 5rem;
    padding-left: 5rem;
  }
`
