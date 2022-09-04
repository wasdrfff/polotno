// @ts-nocheck
import { useLocation } from "react-router-dom";
import { staticUrls } from "./data";
import { Block, Container, StyledLink } from "./bread-crumbs-styled";
import { Icon } from "../icon";

export const BreadCrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;
  let path = "";
  const parts = pathname
    .split("/")
    .filter(Boolean)
    .map((path) => {
      return "/" + path;
    });
  let urls = parts.map((part) => {
    path += part;
    return path;
  });

  return (
    <Container>
      <Block>
        <StyledLink to="/">Главная</StyledLink>
        <Icon name="rightArrowSmall" color="gray" />
      </Block>
      {urls.map((url) => {
        return (
          <Block>
            <StyledLink to={url}>{staticUrls[url]}</StyledLink>
            <Icon name="rightArrowSmall" color="gray" />
          </Block>
        );
      })}
    </Container>
  );
};
