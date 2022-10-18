import styled from "styled-components";

export const CollectionCardContent = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.textColor};
  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    flex-direction: column;
    &:nth-child(2n) {
      flex-direction: column;
    }
  }
`;
export const Image = styled.img`
  max-width: 100%;
`;
export const WrapperImage = styled.div`
  width: 267px;
`;
export const Description = styled.div`
  width: 267px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export const Text = styled.span``;
