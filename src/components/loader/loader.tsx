import { LoaderWrapper, Loading, LoadingContent } from "./loader-styled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Loading>
        <LoadingContent />
        <LoadingContent />
        <LoadingContent />
        <LoadingContent />
      </Loading>
    </LoaderWrapper>
  );
};
