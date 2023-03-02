import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 170px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
  padding-right: 30px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 5%);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1110px;
  justify-content: space-between;
  margin: 0 24px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 855px;
  a {
    text-decoration: none;
  }
  @media screen and (max-width: ${(props) => props.theme.sizes.tablet}) {
    display: none;
  }
`;

export const ItemsSelect = styled.div`
  position: relative;
  padding: 12px 0;
  display: flex;
  align-items: center;
  gap: 5px;
  :hover .items-select-content {
    display: flex;
  }
`;

export const ItemsSelectContent = styled.div`
  position: absolute;
  top: 40px;
  left: -21px;
  width: 360px;
  display: none;
  flex-direction: column;
  padding: 35px 20px;
  z-index: 1000;
  box-shadow: 0 20px 50px rgb(0 0 0 / 5%);
  border-radius: 8px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  gap: 10px;
`;

export const CustomLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.textColor};
  :hover {
    color: ${(props) => props.theme.colors.activeColor};
  }
  &.selected {
    color: ${(props) => props.theme.colors.activeColor};
  }
`;
