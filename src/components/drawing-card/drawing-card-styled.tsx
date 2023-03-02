import { hexToRgba } from "../../utils/hex-to-rgba";
import styled from "styled-components";

export const DrawingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 600px;
  padding: 90px 0;
  :nth-child(2n-1) {
    background-color: ${(props) =>
      hexToRgba(props.theme.colors.focusColor, 0.1)};
  }
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    flex-direction: column;
  }
`;
export const DrawingImageWrapper = styled.div`
  max-width: 540px;
  max-height: 320px;
  width: 100%;
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0;
  padding-left: 10px;
  align-items: flex-start;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 10px;
  }
`;

export const Detail = styled.li`
  ::marker {
    font-size: 8px;
  }
`;
