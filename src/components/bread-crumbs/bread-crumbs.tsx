//@ts-nocheck
import { useLocation } from "react-router-dom";
import { staticUrls } from "./data";
import { Block, Container, StyledLink } from "./bread-crumbs-styled";
import { Icon } from "../icon";
import { ScreenType, useScreenType } from "../../utils/screen-mode";

export const BreadCrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const parts = pathname
    .split("/")
    .filter(Boolean)
    .map((path) => {
      return "/" + path;
    });

  let path = "";

  const urls = parts.map((part) => {
    path += part;
    return path;
  });

  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  if (pathname === "/") {
    return null;
  }

  return (
    <Container>
      <Block>
        <StyledLink to="/">Главная</StyledLink>
        <Icon
          name="rightArrowSmall"
          color="textColor2"
          size={isDesktop ? 30 : 15}
        />
      </Block>
      {urls.map((url) => {
        return (
          <Block key={url}>
            <StyledLink to={url}>{staticUrls[url]}</StyledLink>
            {url !== urls[urls.length - 1] && (
              <Icon
                name="rightArrowSmall"
                color="textColor2"
                size={isDesktop ? 30 : 15}
              />
            )}
          </Block>
        );
      })}
    </Container>
  );
};
