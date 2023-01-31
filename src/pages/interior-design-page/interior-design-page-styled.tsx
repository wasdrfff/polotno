import styled, { css } from "styled-components";
import square from "./assets/images/Square.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding-top: 50px;
  padding-bottom: 75px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 30px;
  }
`;

export const SeparatorWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.desktop}) {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${(props) => props.theme.sizes.desktop}) {
    padding-left: 25px;
  }
`;

export const Title = styled.div`
  max-width: 1110px;
  width: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  text-align: center;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 315px;
    text-align: left;
    padding: 0 25px;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  max-width: 920px;
  width: 100%;
  padding-right: 15px;
  padding-bottom: 15px;
  @media screen and (max-width: ${(props) => props.theme.sizes.desktop}) {
    padding: 0 25px;
  }
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 325px;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
`;

export const ProjectCards = styled.div`
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Actions = styled.div`
  max-width: 730px;
  width: 100%;
  display: flex;
  gap: 30px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 0 25px;
    gap: 15px;
  }
`;
