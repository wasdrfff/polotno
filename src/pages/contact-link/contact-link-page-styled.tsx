import styled  from "styled-components";
import { variables } from "../../variables";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 0 60px;
`;

export const MainContainer = styled.main`
  max-width: 920px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and(max-width: ${variables.sizes.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1010px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid ${variables.colors.common.lightBlue};
  max-width: 445px;
  width: 100%;
  padding: 20px 62px 40px;

  @media screen and(max-width: ${variables.sizes.tablet}) {
    width: 325px;
    height: 400px;

    padding: 35px 50px 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  width: 100%;
  gap: 15px;
  textarea {
    border: 2px solid ${variables.colors.common.lightBlue};
    margin-bottom: 15px;
    max-width: 320px;
    width: 100%;
    height: 100px;
    padding: 20px 0;
    font-size: 18px;
    resize: none;
    &::placeholder {
      padding-left: 25px;
    }

    @media screen and(max-width: ${variables.sizes.tablet}) {
      font-size: 15px;
      height: 60px;
    }
  }
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid ${variables.colors.common.lightBlue};
  max-width: 445px;
  width: 100%;
  padding: 50px 62px 40px;

  @media screen and(max-width: ${variables.sizes.tablet}) {
    width: 325px;
    height: 400px;
    padding: 18px 35px 40px;
  }
`;

export const CardsContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  font-size: 18px;
  border: 2px solid ${variables.colors.common.lightBlue};
  height: 215px;
  @media screen and(max-width:${variables.sizes.tablet}) {
    font-size: 15px;
    height: 140px;
  }
`;

export const SocialCard = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  @media screen and(max-width:$tablet-width) {
    margin: 0;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
