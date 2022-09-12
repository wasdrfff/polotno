import styled, { css } from "styled-components";
import { theme } from "../../variables";
import square from "./assets/images/Square.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BlueSquare = styled.img.attrs(() => ({
  src: square,
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

  @media screen and (max-width: ${theme.sizes.tablet}) {
    width: 50px;
  }
`;

export const Text = styled.span`
  font-size: 25px;
  font-weight: 400;

  @media screen and (max-width: ${theme.sizes.tablet}) {
    font-size: 15px;
  }
`;

export const GreetingSectionWrapper = styled.div`
  margin-bottom: 60px;
  width: 100%;
`;

export const SliderContainer = styled.div<{ isDesktop: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: flex-end;
  width: 100%;
  max-width: 1010px;
  padding: 60px 0;
  ${(p) =>
    !p.isDesktop
      ? css`
          max-width: 325px;
        `
      : ""}
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1010px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 95px;
  padding-top: 30px;

  border-top: 6px solid ${theme.colors.mainColor};

  @media screen and (max-width: ${theme.sizes.tablet}) {
    border-top: none;
    padding-right: 0;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-bottom: 15px;
`;
