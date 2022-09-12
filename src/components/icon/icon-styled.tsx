import styled, { css } from "styled-components";
import { IconColorPalette } from "./types";
import { theme } from "../../variables";

export const Container = styled.div<{
  iconColor?: IconColorPalette;
  size?: number;
}>`
  display: inline-flex;
  vertical-align: bottom;
  justify-content: center;
  align-items: center;

  color: ${(p) => (p.iconColor ? theme.colors[p.iconColor] : "inherit")};

  ${(props) =>
    props.size
      ? css`
          width: ${props.size}px;
          height: ${props.size}px;
          min-width: ${props.size}px;
          min-height: ${props.size}px;
        `
      : ""}
`;
