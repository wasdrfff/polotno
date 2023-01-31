import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 75px;
  gap: 50px;
  @media screen and (max-width: ${(props) => props.theme.sizes.mobile}) {
    align-items: start;
    padding: 30px 0 45px 0;
  }
`;

export const SeparatorWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`;


export const Container = styled.div`
  display: flex;
  gap: 30px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 15px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 75px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 20px;
  }
`;
