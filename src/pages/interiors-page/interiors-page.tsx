import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Project,
  Title,
  ImagesWrapper,
  Image,
} from "./interiors-page-styled";
import { useInteriorsPage } from "./use-interiors-page";

export const InteriorsPage = () => {
  const { projects } = useInteriorsPage();

  return (
    <>
      <Wrapper>
        <Container>
          {projects.map(({ title, planUrl, blueprintUrl, id }) => (
            <Project>
              <Title>{title}</Title>
              <ImagesWrapper>
                <Link to={`/interiors/plan-${id}`}>
                  <Image src={planUrl} alt="plan" />
                </Link>
                <Link to={`/interiors/blueprint-${id}`}>
                  <Image src={blueprintUrl} alt="blueprint" />
                </Link>
              </ImagesWrapper>
            </Project>
          ))}
        </Container>
      </Wrapper>
    </>
  );
};
