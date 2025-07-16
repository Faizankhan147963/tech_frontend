import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, []);

  return scrollRef;
};

export default useLocomotiveScroll;
