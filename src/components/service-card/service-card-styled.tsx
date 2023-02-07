import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 30px;
  }
`;

export const ExampleLink = styled(Link)`
  text-decoration: none;
  text-align: center;
`;

export const SliderWrapper = styled.div`
  width: 100%;
`;
