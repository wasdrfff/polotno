import { hexToRgba } from "../../../../utils/hex-to-rgba";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  height: 600px;
  padding: 50px;
  :nth-child(2n-1) {
    background-color: ${(props) =>
      hexToRgba(props.theme.colors.focusColor, 0.1)};
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  max-width: 540px;
  width: 100%;
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

export const FileLink = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.buttonColor};
  padding: 15px 85px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DescriptionContainer = styled.div<{ isSpaceBetween?: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  width: 100%;
  ${(props) =>
    props.isSpaceBetween
      ? css`
          justify-content: space-between;
        `
      : css`
          gap: 50px;
        `}
`;
export const Details = styled.ul<{ isSpaceBetween?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-left: 20px;
  ${(props) =>
    props.isSpaceBetween
      ? css`
          gap: 20px;
        `
      : css`
          gap: 25px;
        `}
`;
export const Detail = styled.li``;
