import { useCallback, useEffect, useState } from "react";

const getViewport = (width) =>
  width >= 1200 ? "lg" : width >= 768 ? "md" : "sm";

const useViewport = () => {
  const [viewport, setViewport] = useState(() =>
    getViewport(window.innerWidth)
  );

  const updateViewport = useCallback(
    () => setViewport(getViewport(window.innerWidth)),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, [updateViewport]);

  return viewport;
};

export default useViewport;
