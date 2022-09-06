import styled from "styled-components";
import { theme } from "../../variables";

export const WorkStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  width: 120px;

  @media screen and (max-width: ${theme.sizes.desktop}) {
    gap: 20px;
    width: 65px;
  }
`;

export const WorkStepTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: ${theme.sizes.desktop}) {
    font-size: 10px;
    height: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  gap: 30px;
  max-width: 1110px;

  @media screen and (max-width: ${theme.sizes.desktop}) {
    width: 325px;
    overflow-x: auto;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export const TitleBlock = styled.p`
  margin-top: 65px;
  font-size: 25px;
  font-weight: 500;
  @media screen and (max-width: ${theme.sizes.desktop}) {
    font-size: 15px;
    margin-top: 45px;
  }
`;
