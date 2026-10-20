import { useEffect } from "react";
import { useLocation } from "react-router";

export const useHashScroll = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      return;
    }
    document.querySelector(`#${CSS.escape(hash.slice(1))}`)?.scrollIntoView();
  }, [hash]);
};
