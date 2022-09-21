import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../variables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ExampleLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 25px;
  @media screen and (max-width: ${theme.sizes.tablet}) {
    font-size: 12px;
  }
`;
export const ExampleImages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  @media screen and (max-width: ${theme.sizes.tablet}) {
    gap: 15px;
  }
`;
export const ExampleImage = styled.img`
  max-width: 540px;
  width: 100%;
  height: 400px;
  @media screen and (max-width: ${theme.sizes.tablet}) {
    width: 155px;
    height: 135px;
  }
`;
