import { Loader } from "../../components/loader";
import { DecorCard } from "../../components/decor-card";
import {
  Container,
  Title,
  Wrapper,
} from "./interior-decoration-sub-page-styled";
import { useSubPage } from "./use-sub-page";

export const InteriorDecorationSubPage = () => {
  const { subPageApiResult } = useSubPage();
  if (!subPageApiResult) return <Loader />;
  return (
    <Wrapper>
      <Title>{subPageApiResult.title}</Title>
      <Container>
        {subPageApiResult.examples.data.map((item) => {
          return (
            <DecorCard
              key={item.id}
              img={item.attributes.card.urlImage}
              description={item.attributes.card.description}
            />
          );
        })}
      </Container>
    </Wrapper>
  );
};
