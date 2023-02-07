import { MediaLayout } from "../media-layout";

import { ProjectCardDesktop, ProjectCardMobile } from "./layout";

export type TProps = {
  title: string;
  subTitle: string;
  details: string[];
  imageUrl: string;
  fileLink?: string;
};
export const ProjectCard = (props: TProps) => {
  return (
    <MediaLayout
      desktopSlot={<ProjectCardDesktop {...props} />}
      mobileSlot={<ProjectCardMobile {...props} />}
    />
  );
};
