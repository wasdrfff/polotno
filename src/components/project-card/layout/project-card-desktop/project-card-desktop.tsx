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
} from "./project-card-desktop-styled";

export const ProjectCardDesktop = ({
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
          <Text textColor="textColor" variant="titleText">
            {title}
          </Text>
          <Text textColor="textColor" variant="defaultText">
            {subTitle}
          </Text>
        </TitleContainer>
        <Details isSpaceBetween={details.length > 4}>
          {details.map(({ id, detail }) => (
            <Detail key={id}>
              <Text textColor="textColor" variant="defaultText">
                {detail}
              </Text>
            </Detail>
          ))}
        </Details>
      </DescriptionContainer>
    </Wrapper>
  );
};
