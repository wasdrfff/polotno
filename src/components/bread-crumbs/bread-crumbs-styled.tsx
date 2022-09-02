import styled from "styled-components";
import { Link } from "react-router-dom";
import { variables } from "../../variables";

export const Container = styled.div`
  display: flex;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${variables.colors.link.gray};
  font-size: 25px;
`;
