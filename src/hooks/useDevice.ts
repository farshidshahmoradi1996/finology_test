/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);

  return { isMobile };
};

export default useDevice;
