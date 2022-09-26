import styled from "styled-components";

export const CollectionCardContent = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.textColor};
  &:nth-child(2n) {
    display: flex;
    flex-direction: row-reverse;
    @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  } ;
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
