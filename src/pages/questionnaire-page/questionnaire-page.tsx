import { Button } from "../../components/button";
import { roomsCells } from "./data";
import { stylesCells } from "./data";
import {
  Actions,
  Block,
  Cell,
  Detail,
  Details,
  EmailInput,
  FamilyInput,
  Form,
  FormWrapper,
  NameCell,
  NoteWrapper,
  OtherInput,
  PlanningInput,
  RoomCell,
  RoomCells,
  StyleCell,
  StyleCells,
  TitleWrapper,
  Wrapper,
} from "./questionnaire-page-styled";
import { Text } from "../../components/text";
import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { useQuestionnairePage } from "./use-questionnaire-page";

export const QuestionnairePage = () => {
  const screenType = useScreenType();
  const isDesktop = screenType === ScreenType.Desktop;
  const { resetForm, sendEmail, toggleInput, isOpenInput, formRef } =
    useQuestionnairePage();

  return (
    <Wrapper>
      <FormWrapper>
        <TitleWrapper>
          <Text variant={isDesktop ? "h3Web" : "mMob"} textColor="textColor">
            Анкета с пожеланиями
          </Text>
        </TitleWrapper>
        <Details>
          <Detail>
            <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
              Вы можете заполнить или отправить антеку до консультации
            </Text>
          </Detail>
          <Detail>
            <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
              Мы будем более информированы
            </Text>
          </Detail>
          <Detail>
            <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
              Вы можете менять свои пожелания после отправки
            </Text>
          </Detail>
        </Details>
        <Form onSubmit={sendEmail} id="questionnaire" ref={formRef}>
          <EmailInput
            placeholder="E - mail"
            type="email"
            required
            name="email"
          />
          <Block>
            <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
              1. Коротко опишите состав семьи, которая будет проживать в
              квартире /доме, включая домашних животных:
            </Text>
            <FamilyInput name="family" id="family" placeholder="Состав семьи" />
          </Block>
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            2. В планировке предусмотрены комнаты:
          </Text>
          <RoomCells>
            {roomsCells.map((roomCell) => {
              return (
                <RoomCell>
                  <Cell
                    type="checkbox"
                    id={roomCell.name}
                    name={roomCell.name}
                    value={roomCell.value}
                  />
                  <NameCell htmlFor={roomCell.name}>
                    <Text
                      variant={isDesktop ? "mWeb" : "mMob"}
                      textColor="textColor"
                    >
                      {roomCell.value}
                    </Text>
                  </NameCell>
                </RoomCell>
              );
            })}
            <RoomCell>
              <Cell type="checkbox" onClick={toggleInput} id="othercheck" />
              <NameCell htmlFor="othercheck">
                <Text
                  variant={isDesktop ? "mWeb" : "mMob"}
                  textColor="textColor"
                >
                  Другое
                </Text>
              </NameCell>
            </RoomCell>
          </RoomCells>
          {isOpenInput && (
            <OtherInput placeholder="Другое" name="other" id="other" />
          )}
          <Block>
            <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
              3. Подробно опишите перепланировку, которую хотелось бы сделать
              (если перепланировки не будет, оставьте графу пустой):
            </Text>
            <PlanningInput name="planning" placeholder="Мой ответ" />
          </Block>
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            4. Стилевые предпочтения:
          </Text>
          <StyleCells>
            {stylesCells.map((styleCell) => {
              return (
                <StyleCell>
                  <Cell
                    type="checkbox"
                    name={styleCell.name}
                    value={styleCell.value}
                    id={styleCell.name}
                  />
                  <NameCell htmlFor={styleCell.name}>
                    <Text
                      variant={isDesktop ? "mWeb" : "mMob"}
                      textColor="textColor"
                    >
                      {styleCell.value}
                    </Text>
                  </NameCell>
                </StyleCell>
              );
            })}
          </StyleCells>
          <NoteWrapper>
            <Text variant={isDesktop ? "sWeb" : "mMob"} textColor="textColor">
              *Пожелания и предпочтения рассчитаны для жилого помещения. В
              случае если помещение общественное, пожелания обсуждаются на
              консультации.
            </Text>
          </NoteWrapper>
        </Form>
      </FormWrapper>
      <Actions>
        <Button onClick={resetForm}>
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            Очистить форму
          </Text>
        </Button>
        <Button form="questionnaire">
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            Отправить анкету
          </Text>
        </Button>
      </Actions>
    </Wrapper>
  );
};
