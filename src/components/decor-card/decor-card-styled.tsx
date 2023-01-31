import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 24px;
  max-width: 400px;
  max-height: 300px;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
