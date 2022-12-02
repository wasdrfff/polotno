import { MediaLayout } from "../media-layout";

import { CardProjectDesktop, CardProjectMobile } from "./layout";

export type TProps = {
  title: string;
  subTitle: string;
  details: string[];
  imageUrl: string;
  fileLink?: string;
};
export const CardProjectNew = (props: TProps) => {
  return (
    <MediaLayout
      desktopSlot={<CardProjectDesktop {...props} />}
      mobileSlot={<CardProjectMobile {...props} />}
    />
  );
};
