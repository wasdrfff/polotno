import { TProps } from "../../types";
import { Text } from "../../../text";
import {
  Detail,
  Details,
  FileLink,
  ImageWrapper,
  Picture,
  TitleContainer,
  Wrapper,
} from "./project-card-mobile-styled";

export const ProjectCardMobile = ({
  title,
  subTitle,
  details,
  imageUrl,
  fileLink,
}: TProps) => {
  return (
    <Wrapper>
      <TitleContainer>
        <Text textColor="textColor" variant="mobileTitleTextStyle">
          {title}
        </Text>
        <Text textColor="textColor" variant="mobileTitleTextStyle">
          {subTitle}
        </Text>
      </TitleContainer>
      <ImageWrapper>
        <Picture src={imageUrl} alt="project" />
        {fileLink && <FileLink href={fileLink}>Пример</FileLink>}
      </ImageWrapper>
      <Details>
        {details.map((detail) => (
          <Detail key={detail}>
            <Text textColor="textColor" variant="mobileTextStyle">
              {detail}
            </Text>
          </Detail>
        ))}
      </Details>
    </Wrapper>
  );
};
