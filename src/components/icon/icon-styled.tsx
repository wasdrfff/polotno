import styled from "styled-components";
import {IconColorPalette} from "./types";
import {variables} from '../../variables'

export const Container = styled.div<{
  // size?: IconSizes
  iconColor?: IconColorPalette
}>`
  display: inline-flex;
  vertical-align: bottom;
  justify-content: center;
  align-items: center;

  color: ${(p) => (p.iconColor ? variables.colors.common[p.iconColor] : 'inherit')};

`
  // width: ${(props) => getDimensionSize(props.size)}px;
  // height: ${(props) => getDimensionSize(props.size)}px;
  // min-width: ${(props) => getDimensionSize(props.size)}px;
  // min-height: ${(props) => getDimensionSize(props.size)}px;
