import { useEffect, useState } from "react";
import { screenMatcher } from "./screen-matcher";
import type { ScreenType } from "./types";

export function useScreenType(): ScreenType {
  const [type, setType] = useState(screenMatcher.getScreenType());

  useEffect(() => {
    screenMatcher.subscribe(setType);
    return () => {
      screenMatcher.unsubscribe(setType);
    };
  }, []);
  return type;
}
