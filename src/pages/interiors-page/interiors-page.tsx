import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { projects } from "./data";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Project,
  Title,
  ImagesWrapper,
  Image,
} from "./interiors-page-styled";
import { BreadCrumbs } from "../../components/bread-crumbs";

export const InteriorsPage = () => {
  return (
    <>
      <Header />
      <BreadCrumbs />
      <Wrapper>
        <Container>
          {projects.map(({ title, plan, blueprint, id }) => (
            <Project>
              <Title>{title}</Title>
              <ImagesWrapper>
                <Link to={`/interiors/plan-${id}`}>
                  <Image src={plan} alt="plan" />
                </Link>
                <Link to={`/interiors/blueprint-${id}`}>
                  <Image src={blueprint} alt="blueprint" />
                </Link>
              </ImagesWrapper>
            </Project>
          ))}
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};
