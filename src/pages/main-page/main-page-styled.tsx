import styled, { css } from "styled-components";
import square from "./assets/images/Square.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-bottom: 75px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding-bottom: 45px;
  }
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

  @media screen and (max-width: ${(props) => props.theme.sizes.desktop}) {
    width: 50px;
  }
`;

export const GreetingSectionWrapper = styled.div`
  width: 100%;
`;

export const SliderContainer = styled.div<{ isDesktop: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: flex-end;
  width: 100%;
  max-width: 935px;
  ${(p) =>
    !p.isDesktop &&
    css`
      max-width: 325px;
      align-items: center;
    `}
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1010px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 30px;
  @media screen and (max-width: ${(props) => props.theme.sizes.desktop}) {
    padding-top: 0;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-left: 15px;
  padding-bottom: 15px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 0 25px;
  }
`;

export const SeparatorWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`;

export const Chapter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.desktop}) {
    display: none;
  }
`;

export const ContentChapter = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
