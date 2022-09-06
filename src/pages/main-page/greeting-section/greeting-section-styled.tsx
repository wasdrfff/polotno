import styled, { css } from "styled-components";
import { theme } from "../../../variables";

export const Separator = styled.div`
  width: 255px;
  height: 0;
  border-bottom: 2px solid ${theme.colors.mainColor};
  @media screen and (max-width: ${theme.sizes.tablet}) {
    width: 85px;
  }
`;

export const Wrapper = styled.div<{ isDesktop: boolean }>`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Background = styled.div<{ isDesktop: boolean }>`
  position: absolute;
  width: 100%;
  height: ${(p) => (p.isDesktop ? "455px" : "190px")};
  background-color: rgba(49, 135, 213, 0.1);
`;

export const Content = styled.div<{ isDesktop: boolean }>`
  padding-top: 80px;

  max-width: ${(p) => (p.isDesktop ? "1010px" : "325px")};
  width: 100%;
  display: flex;
  gap: 110px;

  ${(p) =>
    !p.isDesktop
      ? css`
          flex-direction: column;
          align-items: center;
          gap: 15px;
          padding-top: 15px;
        `
      : ""}
`;

export const Description = styled.div<{ isDesktop: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${(p) => (p.isDesktop ? "30px" : "4px")};

  align-items: center;
  width: ${(p) => (p.isDesktop ? "285px" : "185px")};
`;

export const ImageWrapper = styled.div<{ isDesktop: boolean }>`
  position: relative;
  padding-right: 15px;
  padding-bottom: 15px;
  flex: 1;

  ${(p) =>
    !p.isDesktop
      ? css`
          padding-right: 5px;
          padding-bottom: 0;
          padding-left: 5px;
        `
      : "0"};
`;

export const Text = styled.span<{ isDesktop: boolean }>`
  font-size: ${(p) => (p.isDesktop ? "25px" : "15px")};
  text-align: center;
`;
