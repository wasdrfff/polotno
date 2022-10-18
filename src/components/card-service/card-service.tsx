import {
  ExampleImage,
  ExampleImages,
  ExampleLink,
  Wrapper,
} from "./card-service-styled";

type TProps = {
  imgUrls: string[];
  description: string;
  exampleLink: string;
};

export const CardService = ({ exampleLink, imgUrls, description }: TProps) => {
  return (
    <Wrapper>
      <ExampleLink to={"/services/interior-decoration" + exampleLink}>
        {description}
      </ExampleLink>
      <ExampleImages>
        {imgUrls.map((imgUrl, id) => {
          return (
            <ExampleImage
              key={id}
              src={imgUrl}
              alt="example"
              className="card-service__image"
            />
          );
        })}
      </ExampleImages>
    </Wrapper>
  );
};
