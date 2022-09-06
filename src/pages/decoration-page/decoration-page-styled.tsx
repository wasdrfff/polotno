import styled from "styled-components";
import { theme } from "../../variables";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1110px;

  display: flex;
  flex-direction: column;
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 650px;

  @media screen and (max-width: ${theme.sizes.tablet}) {
    height: 235px;
  }
`;
