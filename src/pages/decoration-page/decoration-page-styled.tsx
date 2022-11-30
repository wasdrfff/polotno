import styled from "styled-components";
import { theme } from "../../variables";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 12px;
  gap: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1110px;
  width: 100%;
  gap: 12px;
  @media screen and (max-width: ${theme.sizes.tablet}) {
    align-items: center;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  @media screen and (max-width: ${theme.sizes.tablet}) {
    height: 235px;
  }
`;
