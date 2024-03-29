import styled from "styled-components";

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const ModalWrapper = styled.div`
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
`;
export const IconWrapper = styled.div`
  cursor: pointer;
  padding: 10px;
`;
