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
  padding: 8px 0;
  display: flex;
  align-items: center;
  gap: 5px;
  :hover .items-select-content {
    display: flex;
  }
`;

export const ItemsSelectContent = styled.div`
  position: absolute;
  top: 96px;
  width: 160px;
  display: none;
  flex-direction: column;
  padding: 15px 0;
  z-index: 1000;
  gap: 10px;
`;
