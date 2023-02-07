import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;
`;

export const SeparatorWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1110px;
  width: 100%;
  gap: 30px;
`;

export const CardWrapper = styled.div`
  max-width: 1110px;
  width: 100%;
  height: 660px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 375px;
    height: 270px;
  }
`;

export const CardsColumn = styled.div`
  max-width: 540px;
  width: 100%;
  height: 340px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 375px;
    width: 100%;
    height: 270px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;
`;

export const ButtonWrapper = styled.div`
  max-width: 380px;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    max-width: 155px;
  }
`;
