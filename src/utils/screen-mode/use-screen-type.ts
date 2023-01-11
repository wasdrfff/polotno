import { useEffect, useState } from "react";
import { screenMatcher } from "./screen-matcher";
import type { ScreenType } from "./types";

export function useScreenType(): ScreenType {
  const [type, setType] = useState(screenMatcher.getScreenType());

  useEffect(() => {
    let isMounted = true;
    screenMatcher.subscribe((type) => {
      if (isMounted) {
        setType(type);
      }
    });
    return () => {
      screenMatcher.unsubscribe(setType);
      isMounted = false;
    };
  }, []);
  return type;
}
