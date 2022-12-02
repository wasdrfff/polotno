import { ReactNode } from "react";
import { ScreenType, useScreenType } from "../../utils/screen-mode";

type TProps = {
  desktopSlot: ReactNode;
  tabletSlot?: ReactNode;
  mobileSlot: ReactNode;
};

export const MediaLayout = ({
  desktopSlot,
  tabletSlot,
  mobileSlot,
}: TProps) => {
  const screenType = useScreenType();

  switch (screenType) {
    case ScreenType.Desktop:
      return <>{desktopSlot}</>;
    case ScreenType.Tablet:
      return <>{tabletSlot || mobileSlot}</>;
    case ScreenType.Mobile:
    default:
      return <>{mobileSlot}</>;
  }
};
