import styled, { css } from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Gradient = styled.div`
  background: linear-gradient(
    360deg,
    #1e1e1e 0%,
    rgba(30, 30, 30, 0.9) 7.7%,
    rgba(30, 30, 30, 0.8) 15.49%,
    rgba(30, 30, 30, 0.7) 23.52%,
    rgba(30, 30, 30, 0.6) 32.06%,
    rgba(30, 30, 30, 0.5) 37.66%,
    rgba(30, 30, 30, 0.4) 43.44%,
    rgba(30, 30, 30, 0.3) 48.75%,
    rgba(30, 30, 30, 0.2) 55.16%,
    rgba(30, 30, 30, 0.05) 60.94%
  );
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const LabelWrapper = styled.div<{ isLarge?: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 0;

  border-top: 2px solid ${(props) => props.theme.colors.mainColor};
  padding: 15px 0 30px 30px;
  ${(props) =>
    props.isLarge
      ? css`
          width: 580px;
        `
      : css`
          width: 285px;
        `}
  @media screen and (max-width:${(props) => props.theme.sizes.tablet}) {
    width: 265px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
