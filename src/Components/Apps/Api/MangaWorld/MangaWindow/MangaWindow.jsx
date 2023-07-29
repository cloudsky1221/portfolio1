import PropTypes from "prop-types";
import { useState } from "react";

import "./MangaWindow.css";
import Manga from "./Manga/Manga";
import SavedMangaList from "./SavedMangaList/SavedMangaList";
import History from "./History/History";
import Footer from "./Footer/Footer";

function MangaWindow({opening}) {

  console.count("mangaWindow")

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
                  <button className="history" onClick={() => setDisplay("history")}>History</button>
                  <button className="saved-manga" onClick={() => setDisplay("saved-manga")}>Saved Manga</button>
              </div>
              <div className="text-area">
                  {display === "manga" && <Manga setResponseMessage={setResponseMessage}/>}
                  {display === "history" && <History setResponseMessage={setResponseMessage}/>}
                  {display === "saved-manga" && <SavedMangaList setResponseMessage={setResponseMessage}/>}
              </div>
          </div>
          <div className="footer">
            <Footer responseMessage={responseMessage} />
          </div>
      </div>
  )
}

export default MangaWindow

MangaWindow.propTypes = {
  opening:PropTypes.object
}