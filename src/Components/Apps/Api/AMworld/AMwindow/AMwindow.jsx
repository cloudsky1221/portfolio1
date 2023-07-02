import PropTypes from "prop-types";
import { useState } from "react";

import "./AMwindow.css";
import Anime from "./Anime/Anime";
import Manga from "./Manga/Manga";

const checkLocalStorageAnime = JSON.parse(localStorage.getItem("anime")) || {}
const checkLocalStorageManga = JSON.parse(localStorage.getItem("manga")) || {}

const lastAnimePage = JSON.parse(localStorage.getItem("anime page")) || 1
const lastMangaPage = JSON.parse(localStorage.getItem("manga page")) || 1

function AMwindow({opening}) {

  const [animeData, setAnimeData] = useState(checkLocalStorageAnime)
  const [mangaData, setMangaData] = useState(checkLocalStorageManga)

//   const [savedAnimeData, setSavedAnimeData] = useState([])
//   const [savedMangaData, setSavedMangaData] = useState([])

  const [display, setDisplay] = useState("intro")

  const [animePageNo, setAnimePageNo] = useState(lastAnimePage)
  const [mangaPageNo, setMangaPageNo] = useState(lastMangaPage)

  const [isLoading, setIsLoading] = useState(false)

  function handleAnime(url, pageNo, key, setFunction, pageSet) {
      opening.set(true);
      setIsLoading(true);
      // !data &&
      (async () => 
      {console.log("repeat", pageNo);await fetch(`${url}/${pageNo}`).then(res => res.json())
      .then((res) => {
          setIsLoading(false);
          if (res.status) {
            if (res.status === 400) return;
            if (res.status === 404) {
              pageSet(prev => prev + 1);
            }
          }
          else {
            localStorage.setItem(key,JSON.stringify(res.data));
            localStorage.setItem(key+" page",JSON.stringify(res.data.mal_id));
        }
      })
      .then(() => setFunction(JSON.parse(localStorage.getItem(key))))
      .catch((err) => {
          console.log(err)
      })})()
  }

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
                  <button className="manga-page" onClick={() => {setDisplay("manga")}}>Manga</button>
                  <button className="saved-anime">Saved Anime</button>
                  <button className="saved-manga">Saved Manga</button>
              </div>
              <div className="text-area">
                  {isLoading && <p>loading .....</p>}
                  {display === "anime" && <Anime data={animeData} set={setAnimeData} page={{number:animePageNo, set:setAnimePageNo}} hand={handleAnime} />}
                  {display === "manga" && <Manga data={mangaData} set={setMangaData} page={{number:mangaPageNo, set:setMangaPageNo}} hand={handleAnime} />}
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