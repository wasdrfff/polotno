import { MediaLayout } from "../media-layout";

import { ProjectCardDesktop, ProjectCardMobile } from "./layout";

export type TProps = {
  title: string;
  subTitle: string;
  details: TDetail[];
  imageUrl: string;
  fileLink?: string;
};

type TDetail = {
  id: string;
  detail: string;
};

export const ProjectCard = (props: TProps) => {
  return (
    <MediaLayout
      desktopSlot={<ProjectCardDesktop {...props} />}
      mobileSlot={<ProjectCardMobile {...props} />}
    />
  );
};
