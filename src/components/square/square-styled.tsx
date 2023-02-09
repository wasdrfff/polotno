import styled, { css } from "styled-components";
import square from "./assets/images/BlueSquare.svg";

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
          bottom: -15px;
          left: -15px;
          width: 100px;
          height: 100px;
        `;
      case "right":
        return css`
          bottom: -20px;
          right: -20px;
          width: 150px;
          height: 150px;
        `;
    }
  }};

  display: ${(p) => (p.isHidden ? "block" : "none")};
`;
