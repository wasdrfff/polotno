import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const SliderWrapper = styled.div`
  max-width: 950px;
  width: 100%;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const Content = styled.div`
  display: flex;
  gap: 30px;
`;

export const Image = styled.img`
  max-width: 540px;
  width: 100%;
`;

export const BackWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 94px;
  max-width: 924px;
  width: 100%;
`;

export const SeparatorWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
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
