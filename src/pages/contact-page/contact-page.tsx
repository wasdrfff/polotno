import { Button } from "../../components/button";
import { Input } from "../../components/input";
import {
  Card,
  CardsContent,
  CustomText,
  Description,
  Form,
  FormWrapper,
  MainContainer,
  SocialCard,
  TextArea,
  Wrapper,
  Action,
} from "./contact-page-styled";
import { Text } from "../../components/text";
import { useContactPage } from "./use-contact-page";
import { Icon } from "../../components/icon";
import { ScreenType, useScreenType } from "../../utils/screen-mode";

export const ContactPage = () => {
  const {
    validationEmail,
    sendEmail,
    validationName,
    validationPhone,
    phone,
    name,
    email,
    formRef,
    setName,
    setPhone,
    setEmail,
  } = useContactPage();

  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;

  return (
    <Wrapper>
      <MainContainer>
        <CardsContent>
          <Text variant={isDesktop ? "h1Web" : "h1Mob"} textColor="textColor">
            Режим работы
          </Text>
          <Card>
            <Description>
              <Text
                variant={isDesktop ? "h3Web" : "mMob"}
                textColor="textColor"
              >
                Позвонить/
              </Text>
              <Text
                variant={isDesktop ? "h3Web" : "mMob"}
                textColor="textColor"
              >
                встретиться онлайн
              </Text>
              <Text
                variant={isDesktop ? "h3Web" : "mMob"}
                textColor="textColor"
              >
                ежедневно
              </Text>
              <Text
                variant={isDesktop ? "h3Web" : "mMob"}
                textColor="textColor"
              >
                10.00-19.00
              </Text>
            </Description>
            <SocialCard>
              <Icon name="mail" size={isDesktop ? 30 : 20} />
              <Icon name="phone" size={isDesktop ? 30 : 20} />
              <Icon name="message" size={isDesktop ? 30 : 20} />
            </SocialCard>
          </Card>
          <Card>
            <Description>
              <Text
                variant={isDesktop ? "h3Web" : "mMob"}
                textColor="textColor"
              >
                Консультация очно
              </Text>
              <Text
                variant={isDesktop ? "h3Web" : "mMob"}
                textColor="textColor"
              >
                пн-пт
              </Text>
              <Text
                variant={isDesktop ? "h3Web" : "mMob"}
                textColor="textColor"
              >
                10.00-19.00
              </Text>
            </Description>
            <Icon name="cup" size={isDesktop ? 30 : 25} />
          </Card>
        </CardsContent>
        <FormWrapper>
          <Form id="contact" onSubmit={sendEmail} ref={formRef}>
            <Input
              required
              name="name"
              value={name}
              onChange={setName}
              placeholder="Имя"
              getErrorMessage={validationName}
            />
            <Input
              mask={"+7 (999) 999-99-99"}
              required
              name="phone"
              value={phone}
              onChange={setPhone}
              getErrorMessage={validationPhone}
              placeholder="+7 (999) - 999 - 99 - 99"
            />
            <Input
              required
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={setEmail}
              getErrorMessage={validationEmail}
            />
            <TextArea
              cols={80}
              rows={4}
              placeholder="Введите сообщение"
              id="message"
              name="message"
            />
          </Form>
          <Action>
            <Button form="contact">
              <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
                Оставить заявку
              </Text>
            </Button>
            <CustomText
              variant={isDesktop ? "mWeb" : "sMob"}
              textColor="textColor"
            >
              *мы свяжемся с вами в течение 1 рабочего дня
            </CustomText>
          </Action>
        </FormWrapper>
      </MainContainer>
    </Wrapper>
  );
};
