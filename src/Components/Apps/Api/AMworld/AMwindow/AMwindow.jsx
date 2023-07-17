import PropTypes from "prop-types";
import { useState } from "react";

import "./AMwindow.css";
import Anime from "./Anime/Anime";
import Manga from "./Manga/Manga";
import SavedAnimeList from "./SavedAnimeList/SavedAnimeList";
import SavedMangaList from "./SavedMangaList/SavedMangaList";

function AMwindow({opening}) {

//   const [savedAnimeData, setSavedAnimeData] = useState([])
//   const [savedMangaData, setSavedMangaData] = useState([])

  const [display, setDisplay] = useState("intro")

  return (
      <div className="main-window">
          <div className="title-bar">
              <div className="title-name">Anime/Manga World</div>
              <div className="buttons">
                  <button className="minimize">_</button>
                  <button className="close" onClick={() => opening.set(false)}>x</button>
              </div>
          </div>
          <div className="body">
              <div className="select-button">
                  <button className="anime-page" onClick={() => setDisplay("anime")}>Anime</button>
                  <button className="manga-page" onClick={() => setDisplay("manga")}>Manga</button>
                  <button className="saved-anime" onClick={() => setDisplay("saved-anime")}>Saved Anime</button>
                  <button className="saved-manga" onClick={() => setDisplay("saved-manga")}>Saved Manga</button>
              </div>
              <div className="text-area">
                  {display === "anime" && <Anime />}
                  {display === "manga" && <Manga />}
                  {display === "saved-anime" && <SavedAnimeList />}
                  {display === "saved-manga" && <SavedMangaList />}
              </div>
          </div>
          <div className="footer">
              response text : successfull, getting data from the url, failure
          </div>
      </div>
  )
}

export default AMwindow

AMwindow.propTypes = {
  opening:PropTypes.object
}