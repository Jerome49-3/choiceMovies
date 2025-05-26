import { useState, Fragment, useEffect } from "react";
import "./assets/css/App.css";
import movies from "./assets/json/movies.json";
import Image from "./components/images/Image";
// import Header from './components/header/Header';
import Title from "./components/title/Title";
import { useWindowDimensions } from "./hookCustom/Dimensions";

// import Article from './components/article/Article';

function App() {
  const [selectMovie, setSelectMovie] = useState(null);
  console.log("selectMovie:", selectMovie);
  const [source, setSource] = useState(null);
  const [showTitle, setShowTitle] = useState(true);
  const [dim, setDim] = useState({});
  console.log("dim in app:", dim);
  // useEffect(() => {
  //   return () => window.addEventListener("load", setDimensions(setDim));
  // }, [window]);
  useWindowDimensions(setDim);
  useEffect(() => {
    movies.map((el, index) => {
      console.log("el:", el);
      if (index === selectMovie) {
        const backImg = el.background;
        setSource(
          document.documentElement.style.setProperty("--backImg", backImg)
        );
      }
    });
  }, [selectMovie]);

  return (
    <div className="boxMovies">
      <header>
        <div className="wrapper">
          {movies.map((movie, index) => {
            return (
              <button
                onClick={() => {
                  setSelectMovie(index);
                  setShowTitle(false);
                  // console.log('click');
                }}
                key={index}
                class={selectMovie === null ? "btnMovie" : "btnSlctMovie"}
              >
                {movies[index].name}
              </button>
            );
          })}
        </div>
      </header>
      <Title
        title="Merci de choisir un film !"
        classTxt={showTitle ? "choice" : "hide"}
      />
      {/* faire apparaitre le film choisie */}
      <div className="containerMovie">
        {selectMovie !== null && (
          <Fragment>
            <div className="container">
              {/* <Image
                src={movies[selectMovie].background}
                alt={movies[selectMovie].name}
                classImg="backgMovies"
              /> */}
            </div>
            <div className="containerPicActors">
              {movies[selectMovie].actors.map((acteur) => {
                return (
                  <Fragment key={acteur.name}>
                    <div className="boxPicActors">
                      <Image
                        src={acteur.picture}
                        alt={acteur.name}
                        classImg="backgActors"
                      />
                      <Title classTxt="titleActors" title={acteur.name} />
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
