import styled, { css } from "styled-components";
import square from "../main-page/assets/images/Square.svg";

export const ManufacturingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0;
  gap: 24px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 50px;
`;

export const SeparatorWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`;

export const DrawingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const TextWrapper = styled.div`
  padding-left: 161px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding-left: 20px;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  max-width: 935px;
  width: 100%;
  padding-right: 15px;
  padding-bottom: 15px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 100%;
    padding: 0;
  }
`;

export const DrawingsBlock = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: column;
  width: 100%;
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
