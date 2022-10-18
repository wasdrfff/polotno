import styled, { css } from "styled-components";
import { textVariantStyle } from "./text-variant-style";
import { TextVariant } from "./types";

type TextProps = {
  variant: TextVariant;
  textColor: string;
};

export const Text = styled.span<TextProps>`
  ${({ variant, textColor }) => css`
    ${textVariantStyle[variant]}
    color: ${textColor}
  `}
`;
