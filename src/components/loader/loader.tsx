import { LoaderWrapper, Loading, LoadingSection } from "./loader-styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Loading>
        <LoadingSection />
        <LoadingSection />
        <LoadingSection />
        <LoadingSection />
      </Loading>
    </LoaderWrapper>
  );
};
