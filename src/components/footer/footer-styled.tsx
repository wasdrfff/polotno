import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 45px;
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.mainColor};
  padding: 30px 65px;
  gap: 15px;

  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    width: 240px;
    height: 190px;
    padding: 30px 40px;
    gap: 10px;
  }
`;
export const Social = styled.div`
  display: flex;
  gap: 15px;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 10px;
  }
`;

export const CustomLink = styled.a`
  display: flex;
  gap: 20px;
  text-decoration: none;
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    gap: 10px;
  }
`;
