import { useEffect } from "react";

const useScroll = (ref, list) => {
  useEffect(() => {
    if (ref) {
      ref.lastChild.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    }
  }, [list, ref]);
};

export { useScroll };
