import styled from "styled-components";
import { theme } from "../../variables";

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
  text-align: center;
  max-width: 1110px;
  width: 100%;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 25px;
`;

export const DrawingsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media screen and (max-width: ${theme.sizes.tablet}) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Drawing = styled.div`
  padding: 15px;
  border: 2px solid ${theme.colors.mainColor};
`;

export const ImageDrawing = styled.img`
  max-width: 510px;
  width: 100%;
  height: 310px;
`;
