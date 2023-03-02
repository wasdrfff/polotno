import { useHistory } from "react-router-dom";
import { Button } from "../../components/button";
import { ScreenType, useScreenType } from "../../utils/screen-mode";
import { SliderMaterialUi } from "../../components/slider-material-ui";
import { useInteriorDesign } from "./use-interior-design";
import { ProjectCard } from "../../components/project-card";
import {
  Actions,
  BlueSquare,
  Content,
  ProjectCards,
  SeparatorWrapper,
  SliderContainer,
  TextWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from "./interior-design-page-styled";
import { Text } from "../../components/text";
import { Separator } from "../../components/separator/";
import { Loader } from "../../components/loader";

export const InteriorDesignPage = () => {
  const history = useHistory();

  const sendToTheQuestionnaire = () => {
    history.push("/questionnaire");
  };
  const sendToContacts = () => {
    history.push("/contact");
  };

  const screenType = useScreenType();

  const isDesktop = screenType === ScreenType.Desktop;
  const isMobile = screenType === ScreenType.Mobile;

  const { interiorDesignData } = useInteriorDesign();
  if (!interiorDesignData) return <Loader />;
  return (
    <Wrapper>
      <SeparatorWrapper>
        <Separator />
      </SeparatorWrapper>
      <TextWrapper>
        <Text variant={isDesktop ? "h1Web" : "mMob"} textColor="textColor">
          Разработка дизайн - проектов жилых и общественных помещений
        </Text>
      </TextWrapper>

      <SliderContainer>
        <SliderMaterialUi
          items={interiorDesignData.slides}
          height={isMobile ? 235 : 585}
        />
        <BlueSquare position="right" isHidden={!isDesktop} />
      </SliderContainer>
      <Content>
        <TitleWrapper>
          <Title>
            <Text variant={isDesktop ? "h1Web" : "mMob"} textColor="textColor">
              Услуги по проектированию
            </Text>
          </Title>
        </TitleWrapper>
        <ProjectCards>
          {interiorDesignData.projectCards.map(
            ({ id, title, details, image, pdfUrl, workingTime }) => (
              <ProjectCard
                key={id}
                title={title}
                details={details}
                imageUrl={image.url}
                fileLink={pdfUrl}
                subTitle={workingTime}
              />
            )
          )}
        </ProjectCards>
      </Content>
      <Actions>
        <Button onClick={sendToTheQuestionnaire}>
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            Заполнить анкету
          </Text>
        </Button>
        <Button onClick={sendToContacts}>
          <Text variant={isDesktop ? "mWeb" : "mMob"} textColor="textColor">
            Заказать звонок
          </Text>
        </Button>
      </Actions>
    </Wrapper>
  );
};
