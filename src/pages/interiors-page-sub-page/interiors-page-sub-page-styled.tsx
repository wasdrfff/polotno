import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 50px 0 75px 0;
`;

export const SliderWrapper = styled.div`
  max-width: 950px;
  width: 100%;
  position: relative;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  min-width: 325px;
  gap: 30px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 15px;
  }
`;

export const Image = styled.img`
  max-width: 540px;
  min-width: 155px;
  width: 100%;
`;

export const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    span {
      display: none;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 94px;
  max-width: 924px;
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    padding: 0 15px;
    gap: 15px;
    justify-content: center;
  }
`;

export const SeparatorWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  margin-top: 25px;
`;

export const Line = styled.div`
  padding-top: 2px;
  background-color: ${(props) => props.theme.colors.mainColor};
  width: 100%;
`;

export const Loading = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  :after {
    animation: changeContent 0.8s linear infinite;
    display: block;
    content: "⠋";
    font-size: 80px;
  }

  @keyframes changeContent {
    10% {
      content: "⠙";
    }
    20% {
      content: "⠹";
    }
    30% {
      content: "⠸";
    }
    40% {
      content: "⠼";
    }
    50% {
      content: "⠴";
    }
    60% {
      content: "⠦";
    }
    70% {
      content: "⠧";
    }
    80% {
      content: "⠇";
    }
    90% {
      content: "⠏";
    }
  }
`;
