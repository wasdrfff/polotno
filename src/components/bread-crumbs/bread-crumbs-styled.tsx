import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../variables";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1110px;
  padding-left: 95px;
  padding-top: 30px;
  gap: 15px;
  @media screen and (max-width: ${theme.sizes.tablet}) {
    padding-left: 25px;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media screen and (max-width: ${theme.sizes.tablet}) {
    gap: 10px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.textColor2};
  font-size: 25px;
  @media screen and (max-width: ${theme.sizes.tablet}) {
    font-size: 15px;
  }
`;
