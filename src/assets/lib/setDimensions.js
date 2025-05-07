const setDimensions = (setDim) => {
  try {
    const widthWindows = window.innerWidth;
    const heightWindows = window.innerHeight;
    console.log("widthWindows in setDimensions:", widthWindows);
    console.log("heightWindows in setDimensions:", heightWindows);
    setDim({ width: widthWindows, height: heightWindows });
  } catch (error) {
    console.log("error in setDimensions:", error);
  }
};
export default setDimensions;
