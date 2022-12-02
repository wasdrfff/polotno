import { hexToRgba } from "../../../../utils/hex-to-rgba";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 30px 40px;
  :nth-child(2n-1) {
    background-color: ${(props) =>
      hexToRgba(props.theme.colors.focusColor, 0.1)};
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  max-width: 295px;
  width: 100%;
  height: 200px;
`;

export const Picture = styled.img`
  max-width: 295px;
  width: 100%;
  height: 200px;
`;

export const FileLink = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textColor};
  padding: 5px 10px;
  width: 155px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.buttonColor};
`;

export const Details = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 295px;
  width: 100%;
  padding-left: 20px;
  margin: 0;
`;

export const Detail = styled.li`
  ::marker {
    font-size: 8px;
  }
`;
