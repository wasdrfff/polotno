import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Image = styled.img`
  max-width: 350px;
  z-index: 1;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 180px;
    width: 100%;
  }
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 15px;
  }
`;

export const Square = styled.div<{
  squarePosition: "leftTop" | "rightTop" | "leftBottom" | "rightBottom";
}>`
  position: absolute;
  ${(props) => {
    switch (props.squarePosition) {
      case "leftTop":
        return css`
          top: -15px;
          left: -15px;
          width: 100px;
          height: 100px;
        `;
      case "rightTop":
        return css`
          top: -20px;
          right: -20px;
          width: 150px;
          height: 150px;
        `;
      case "leftBottom":
        return css`
          bottom: -15px;
          left: -15px;
          width: 100px;
          height: 100px;
        `;
      case "rightBottom":
        return css`
          bottom: -20px;
          right: -20px;
          width: 150px;
          height: 150px;
        `;
    }
  }}
  border:2px solid ${(props) => props.theme.colors.mainColor};
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 0;
    justify-content: flex-end;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
