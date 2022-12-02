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
} from "./card-project-mobile-styled";

export const CardProjectMobile = ({
  title,
  subTitle,
  details,
  imageUrl,
  fileLink,
}: TProps) => {
  return (
    <Wrapper>
      <TitleContainer>
        <Text textColor="mainColor" variant="mobileTitleTextStyle">
          {title}
        </Text>
        <Text textColor="mainColor" variant="mobileTitleTextStyle">
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
            <Text textColor="mainColor" variant="mobileTextStyle">
              {detail}
            </Text>
          </Detail>
        ))}
      </Details>
    </Wrapper>
  );
};
