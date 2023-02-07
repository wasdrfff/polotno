import { hexToRgba } from "../..//utils/hex-to-rgba";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 75px;
  padding: 50px 0 75px 0;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 50px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
  background-color: ${(props) =>
    hexToRgba(props.theme.colors.backgroundColor, 0.1)};
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 30px 25px;
    gap: 30px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Details = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Detail = styled.li``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 910px;
  width: 100%;
`;

export const EmailInput = styled.input`
  max-width: 320px;
  width: 100%;
  height: 50px;
  background-color: transparent;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 240px;
    height: 35px;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FamilyInput = styled.textarea`
  max-width: 320px;
  width: 100%;
  height: 100px;
  background-color: transparent;
  resize: none;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 230px;
    height: 70px;
  }
`;

export const RoomCells = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 25px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    grid-template-columns: repeat(2, auto);
    gap: 15px;
  } ;
`;

export const RoomCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Cell = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border: 1px solid ${(props) => props.theme.colors.textColor2};
  cursor: pointer;
  :checked {
    background-color: ${(props) => props.theme.colors.mainColor};
  }
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    height: 15px;
    width: 15px;
    min-width: 15px;
  }
`;

export const NameCell = styled.label`
  cursor: pointer;
`;

export const OtherInput = styled.textarea`
  background-color: transparent;
  height: 150px;
  max-width: 615px;
  width: 100%;
  transform: translateX(-150%);
  animation: ani 1s forwards;
  resize: none;
  @keyframes ani {
    0% {
      transform: translateY(-20%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const PlanningInput = styled.textarea`
  max-width: 320px;
  height: 100px;
  background-color: transparent;
  resize: none;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 230px;
    height: 70px;
  }
`;
////
///???

export const StyleCells = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 25px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    grid-template-columns: repeat(1, auto);
    gap: 15px;
  }
`;

export const StyleCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NoteWrapper = styled.div`
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  gap: 30px;
  max-width: 780px;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 365px;
    gap: 15px;
    padding: 0 25px;
  }
`;
