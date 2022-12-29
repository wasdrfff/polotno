import styled from "styled-components";

export const Active = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.buttonColor};
  border: 0;
  height: 60px;
  padding: 0;
  :hover {
    background-color: ${(props) => props.theme.colors.focusColor};
  }
  :active {
    background-color: ${(props) => props.theme.colors.activeColor};
  }
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    height: 35px;
  }
`;
