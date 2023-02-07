import {
  CustomLink,
  FooterWrapper,
  FooterContent,
  Social,
} from "./footer-styled";
import { Icon } from "../icon";
import { Text } from "../text";
import { ScreenType, useScreenType } from "../../utils/screen-mode";

export const Footer = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  return (
    <FooterWrapper>
      <FooterContent>
        <Social>
          <CustomLink href="pinterest.com">
            <Icon name="pinterest" size={isDesktop ? 30 : 25} />
          </CustomLink>
          <CustomLink href="instagram.com">
            <Icon name="instagram" size={isDesktop ? 30 : 25} />
          </CustomLink>
          <CustomLink href="web.telegram.org">
            <Icon name="message" size={isDesktop ? 30 : 25} />
          </CustomLink>
        </Social>
        <CustomLink href="tel:+79126187687">
          <Icon name="phone" size={isDesktop ? 30 : 25} />
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            +79126187687
          </Text>
        </CustomLink>
        <CustomLink href="mailto:malykhm@mail.ru">
          <Icon name="mail" size={isDesktop ? 30 : 25} />
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            malykhm@mail.ru
          </Text>
        </CustomLink>
        <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
          ©полотно 2021
        </Text>
      </FooterContent>
    </FooterWrapper>
  );
};
