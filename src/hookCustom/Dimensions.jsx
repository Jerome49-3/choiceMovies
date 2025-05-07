import { useEffect } from "react";

const setDimensions = (setDim) => {
  try {
    const widthWindows = window.innerWidth;
    const heightWindows = window.innerHeight;
    console.log("widthWindows in setDimensions:", widthWindows);
    console.log("heightWindows in setDimensions:", heightWindows);
    setDim({ width: widthWindows, height: heightWindows });
    document.documentElement.style.setProperty(
      "--widthWindows",
      `${widthWindows}px`
    );
    document.documentElement.style.setProperty(
      "--heightWindows",
      `${heightWindows}px`
    );
  } catch (error) {
    console.log("error in setDimensions:", error);
  }
};

export const useWindowDimensions = (setDim) => {
  useEffect(() => {
    const handleResize = () => setDimensions(setDim);

    // Appel initial
    handleResize();

    // Écoute de resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [setDim]);
};
