import { hexToRgba } from "../../utils/hex-to-rgba";
import styled from "styled-components";
import { Text } from "../../components/text";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 75px 0;
  background-color: ${(props) => hexToRgba(props.theme.colors.mainColor, 0.1)};
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 75px 0;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 45px;

    padding: 30px 25px;
  }
`;

export const CardsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  max-width: 540px;
  width: 100%;

  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 30px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;

  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 15px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  max-width: 540px;
  width: 100%;

  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 30px;
  }
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  gap: 25px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 155px;
    gap: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  max-width: 350px;
  width: 100%;

  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 15px;
    max-width: 325px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.mainColor};
  resize: none;
  font-size: 18px;
  ::placeholder {
    font-family: "Heebo";
    line-height: 30px;
    padding-left: 25px;
    font-size: 20px;
  }
`;

export const SocialCard = styled.div`
  display: flex;
  gap: 10px;
`;

export const CustomText = styled(Text)`
  text-align: center;
`;
