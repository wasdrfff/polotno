import styled, { css } from "styled-components";
import { textColors, textVariantStyle } from "./text-variant-style";
import { TextColor, TextVariant } from "./types";

type TextProps = {
  variant: TextVariant;
  textColor: TextColor;
};

export const Text = styled.span<TextProps>`
  ${({ variant, textColor }) => css`
    ${textVariantStyle[variant]};
    color: ${textColors.colors[textColor]};
  `}
`;
