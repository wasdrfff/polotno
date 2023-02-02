import { Link } from "react-router-dom";
import { MobileMenu } from "../mobile-menu";
import {
  Content,
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
          <Icon name="logo" size={isDesktop ? 90 : 50} color="white" />
        </Link>
        <Menu>
          <ItemsSelect>
            <Text variant={"mWeb"} textColor="textColor">
              Услуги
            </Text>
            <Icon name="bottomArrowSmall" size={10} />
            <ItemsSelectContent className="items-select-content">
              <Link to="/services/interior-design">
                <Text variant={"sMob"} textColor="textColor">
                  Дизайн интерьеров
                </Text>
              </Link>
              <Link to="/services/interior-decoration">
                <Text variant={"sMob"} textColor="textColor">
                  Декорирование интерьеров
                </Text>
              </Link>
              <Link to="/services/furniture-manufacturing">
                <Text variant={"sMob"} textColor="textColor">
                  Изготовление мебели на заказ
                </Text>
              </Link>
            </ItemsSelectContent>
          </ItemsSelect>
          <Link to="/interiors">
            <Text variant={"mWeb"} textColor="textColor">
              Интерьеры
            </Text>
          </Link>
          <Link to="/decoration">
            <Text variant={"mWeb"} textColor="textColor">
              Декорирование
            </Text>
          </Link>
          <Link to="/contact">
            <Text variant={"mWeb"} textColor="textColor">
              Контакты
            </Text>
          </Link>
          <Link to="/questionnaire">
            <Text variant={"mWeb"} textColor="textColor">
              Заполнить анкету
            </Text>
          </Link>
        </Menu>
      </Content>
      <MobileMenu />
    </HeaderWrapper>
  );
};
