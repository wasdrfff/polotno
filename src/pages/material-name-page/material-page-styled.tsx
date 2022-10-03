import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Block = styled.div`
  border: 1px solid ${(props) => props.theme.colors.textColor};
  margin-bottom: 12px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    border: 0;
    gap: 5px;
  }
`;

export const Title = styled.p``;
