import { Text } from "../../../components/text";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
`;
export const ModalSlider = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;
export const ModalImage = styled.img`
  max-width: 100vw;
  object-fit: scale-down;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;
export const IconWrapper = styled.div`
  cursor: pointer;
  margin-right: 25px;
  padding: 8px;
  background-color: #494949;
  border-radius: 50%;
  :active {
    opacity: 0.6;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const CustomText = styled(Text)`
  background-color: #494949;
  padding: 8px;
  border-radius: 8px;
`;
