// @ts-nocheck
import { useLocation } from "react-router-dom";
import { staticUrls } from "./data";
import { Block, Container, StyledLink } from "./bread-crumbs-styled";
import { Icon } from "../icon";

export const BreadCrumbs = () => {
  const location = useLocation();
  console.log(location.pathname);
  const pathname = location.pathname;
  let path = "";
  console.log("pathname", pathname);
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
  console.log("parts", parts);
  console.log(urls);
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
