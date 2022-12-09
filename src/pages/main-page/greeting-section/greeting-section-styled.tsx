import styled, { css } from "styled-components";
import squere from "../assets/images/Square.svg";

export const Separator = styled.div`
  width: 255px;
  height: 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.mainColor};
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 85px;
  }
`;

export const Wrapper = styled.div<{ isDesktop: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Background = styled.div<{ isDesktop: boolean }>`
  position: absolute;
  width: 100%;
  height: ${(p) => (p.isDesktop ? "455px" : "375px")};
  background-color: rgba(49, 135, 213, 0.1);
  z-index: -1;
`;

export const Content = styled.div<{ isDesktop: boolean }>`
  display: flex;
  width: 100%;

  ${(p) =>
    p.isDesktop
      ? css`
          gap: 110px;
          padding-top: 80px;
          max-width: 1010px;
        `
      : css`
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 0 30px;
          max-width: 325px;
        `}
`;

export const Description = styled.div<{ isDesktop: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  ${(p) =>
    p.isDesktop
      ? css`
          gap: 30px;
          width: 285px;
        `
      : css`
          padding: 20px 0 15px;
          gap: 10px;
          width: 185px;
        `}
`;

export const ImageWrapper = styled.div<{ isDesktop: boolean }>`
  position: relative;
  padding-right: 15px;
  padding-bottom: 15px;
  max-width: 635px;
  width: 100%;

  ${(p) =>
    !p.isDesktop &&
    css`
      padding-right: 5px;
      padding-bottom: 5px;
      padding-left: 5px;
    `};
`;

export const BlueSquare = styled.img.attrs(() => ({
  src: squere,
  alt: "square",
}))<{ position: "left" | "right"; isHidden?: boolean }>`
  position: absolute;
  bottom: 0;
  z-index: -1;

  ${(p) => {
    switch (p.position) {
      case "left":
        return css`
          left: 0;
        `;
      case "right":
        return css`
          right: 0;
        `;
    }
  }};

  display: ${(p) => (p.isHidden ? "none" : "block")};

  @media screen and (max-width: ${(props) => props.theme.sizes.desktop}) {
    width: 50px;
  }
`;
