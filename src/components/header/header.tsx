import { Link } from "react-router-dom";
import { MobileMenu } from "../mobile-menu";
import {
  Content,
  CustomLink,
  HeaderWrapper,
  ItemsSelect,
  ItemsSelectContent,
  Menu,
} from "./header-styled";
import { Text } from "../text";
import { Icon } from "../icon";
import { ScreenType, useScreenType } from "../../utils/screen-mode";

export const Header = () => {
  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  return (
    <HeaderWrapper>
      <Content>
        <Link to="/">
          <Icon name="logo" size={isDesktop ? 60 : 45} color="white" />
        </Link>
        <Menu>
          <ItemsSelect>
            <Text variant={"mWeb"} textColor="textColor">
              Услуги
            </Text>
            <Icon name="bottomArrowSmall" size={10} />
            <ItemsSelectContent className="items-select-content">
              <Text variant={"mWeb"} textColor="textColor">
                <CustomLink
                  activeClassName="selected"
                  to="/services/interior-design"
                >
                  Дизайн интерьеров
                </CustomLink>
              </Text>

              <Text variant={"mWeb"} textColor="textColor">
                <CustomLink
                  activeClassName="selected"
                  to="/services/interior-decoration"
                >
                  Декорирование интерьеров
                </CustomLink>
              </Text>

              <Text variant={"mWeb"} textColor="textColor">
                <CustomLink
                  activeClassName="selected"
                  to="/services/furniture-manufacturing"
                >
                  Изготовление мебели на заказ
                </CustomLink>
              </Text>
            </ItemsSelectContent>
          </ItemsSelect>

          <Text variant={"mWeb"} textColor="textColor">
            <CustomLink activeClassName="selected" to="/interiors">
              Интерьеры
            </CustomLink>
          </Text>

          <Text variant={"mWeb"} textColor="textColor">
            <CustomLink activeClassName="selected" to="/decoration">
              Декорирование
            </CustomLink>
          </Text>
          <Text variant={"mWeb"} textColor="textColor">
            <CustomLink activeClassName="selected" to="/contact">
              Контакты
            </CustomLink>
          </Text>
          <Text variant={"mWeb"} textColor="textColor">
            <CustomLink activeClassName="selected" to="/questionnaire">
              Заполнить анкету
            </CustomLink>
          </Text>
        </Menu>
      </Content>
      <MobileMenu />
    </HeaderWrapper>
  );
};
