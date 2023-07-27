import PropTypes from "prop-types";
import { useState } from "react";

import "./MangaWindow.css";
import Manga from "./Manga/Manga";
import SavedMangaList from "./SavedMangaList/SavedMangaList";

function MangaWindow({opening}) {

  const [display, setDisplay] = useState("intro")
  const [responseMessage, setResponseMessage] = useState("Welcome to the Manga World!")

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
                  <button className="manga-page" onClick={() => setDisplay("manga")}>Manga</button>
                  <button className="saved-manga" onClick={() => setDisplay("saved-manga")}>Saved Manga</button>
              </div>
              <div className="text-area">
                  {display === "manga" && <Manga setResponseMessage={setResponseMessage}/>}
                  {display === "saved-manga" && <SavedMangaList setResponseMessage={setResponseMessage}/>}
              </div>
          </div>
          <div className="footer">
            <div className="response-message">
              {responseMessage}
            </div>
          </div>
      </div>
  )
}

export default MangaWindow

MangaWindow.propTypes = {
  opening:PropTypes.object
}