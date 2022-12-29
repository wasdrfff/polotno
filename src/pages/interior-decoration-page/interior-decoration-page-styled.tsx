import { hexToRgba } from "../../utils/hex-to-rgba";
import styled, { css } from "styled-components";
import squere from "./assets/images/Squere.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;
`;

export const SeparatorWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`;

export const Separator = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainColor};
  padding: 1px 0;
`;

export const SliderWrapper = styled.div`
  position: relative;
  max-width: 935px;
  width: 100%;
  padding-right: 15px;
  padding-bottom: 15px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 0;
  }
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
`;

export const WorkStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 5px;
    min-height: 90px;
    min-width: 90px;
  }
`;

export const WorkStepTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  width: 100%;
  gap: 50px;
  background-color: ${(props) => hexToRgba(props.theme.colors.mainColor, 0.1)};
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 30px 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const CardsStageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 20px;
    width: 100%;
    justify-content: flex-start;
    overflow-x: auto;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 100px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 45px;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 350px;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 135px;
  }
`;
