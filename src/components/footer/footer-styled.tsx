import styled from "styled-components";
import { variables } from "../../variables";

export const FooterComponent = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 24px;
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${variables.colors.common.lightBlue};
  padding: 20px 82px 25px;
  gap: 15px;
  img {
    width: 25px;
    height: 25px;
  }
  @media screen and (max-width: $tablet-width) {
    width: 155px;
    height: 115px;
    gap: 5px;
    img {
      width: 15px;
      height: 15px;
    }
  }
`;
export const Social = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: $tablet-width) {
    gap: 10px;
    margin: 0;
  }
`;
