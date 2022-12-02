import { Text } from "../../../text";
import { TProps } from "../../types";
import {
  DescriptionContainer,
  Detail,
  Details,
  FileLink,
  ImageContainer,
  Picture,
  TitleContainer,
  Wrapper,
} from "./card-project-desktop-styled";

export const CardProjectDesktop = ({
  title,
  subTitle,
  details,
  imageUrl,
  fileLink,
}: TProps) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Picture src={imageUrl} alt="project" />
        {fileLink && <FileLink href={fileLink}>Пример</FileLink>}
      </ImageContainer>
      <DescriptionContainer isSpaceBetween={details.length > 4}>
        <TitleContainer>
          <Text textColor="mainColor" variant="titleText">
            {title}
          </Text>
          <Text textColor="mainColor" variant="defaultText">
            {subTitle}
          </Text>
        </TitleContainer>
        <Details>
          {details.map((detail) => (
            <Detail key={detail}>
              <Text textColor="mainColor" variant="defaultText">
                {detail}
              </Text>
            </Detail>
          ))}
        </Details>
      </DescriptionContainer>
    </Wrapper>
  );
};
