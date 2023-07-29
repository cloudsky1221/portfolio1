import { useEffect, useState } from "react";
import PropTypes from "prop-types"
import DisplayMangaInfo from "./DisplayMangaInfo";

function Manga({setResponseMessage}){

  console.count("manga")


    const checkLocalStorageManga = JSON.parse(localStorage.getItem("manga")) || {}
    const lastMangaPage = JSON.parse(localStorage.getItem("manga page")) || 1
    const history_list = JSON.parse(localStorage.getItem("historyList")) || []
    const history_page = JSON.parse(localStorage.getItem("historyPage")) || []
    const mangaList = JSON.parse(localStorage.getItem("savedMangaList")) || []
    const mangaPage = JSON.parse(localStorage.getItem("savedPageList")) || []

    const [mangaData, setMangaData] = useState(checkLocalStorageManga)
    const [mangaPageNo, setMangaPageNo] = useState(lastMangaPage)
    const [historyList, setHistoryList] = useState(history_list)
    const [historyPage, setHistoryPage] = useState(history_page)
    const [saveMangaList, setSaveMangaList] = useState(mangaList)
    const [savedMangaPages, setSavedMangaPages] = useState(mangaPage)


    const [isNext, setIsNext] = useState(false)

    const [clicks, setClicks] = useState(false)
    const [historyClicks, setHistoryClicks] = useState(false)


    const [disable, setDisable] = useState(false)

    useEffect(() => {
        // setIsLoading(true);
        !Object.prototype.hasOwnProperty.call(mangaData, "title") && handleManga(lastMangaPage)
        setResponseMessage("Get the information on the manga you like and save it for further reference")
    }, [])

    useEffect(() => {
        localStorage.setItem("historyList",JSON.stringify(historyList))
        localStorage.setItem("historyPage", JSON.stringify(historyPage))
    }, [historyClicks])

    useEffect(() => {
        localStorage.setItem("savedPageList",JSON.stringify(savedMangaPages))
        localStorage.setItem("savedMangaList", JSON.stringify(saveMangaList))
    }, [clicks])

    function timerMessage() {
        setTimeout(() => {
            setResponseMessage("Get the information on the manga you like and save it for further reference")
        }, 4000);
    }
    
    function handleManga(pageNo) {
        setResponseMessage("loading...")
        setDisable(true)
        setTimeout(() => {
            fetch(`https://api.jikan.moe/v4/manga/${pageNo}`).then(res => res.json())
            .then((res) => {
                // setIsLoading(false);
                if (res.status) {
                    if (res.status === 400) { 
                        setResponseMessage("error getting data")
                        timerMessage()
                        return
                    }
                    if (res.status === 404) {
                        if (isNext === true) handleManga(pageNo + 1)
                        if (isNext === false) handleManga(pageNo - 1)
                    }
                }
                else {
                    localStorage.setItem("manga",JSON.stringify(res.data))
                    localStorage.setItem("manga page",JSON.stringify(res.data.mal_id))
                    setMangaData(res.data)
                    setResponseMessage("data successfully fetched")
                    timerMessage()
                    setDisable(false)
                }
            })   
            .catch((err) => {
                console.log(err)
                setResponseMessage("plese try later")
                timerMessage()
                setDisable(false)
            })
            setMangaPageNo(pageNo);
        }, 2000);
    }

    function list() {
        const id = mangaData?.mal_id
        const image = mangaData?.images?.jpg.small_image_url
        const title = mangaData?.title
        return {id, image, title}
    }

    function handleHistory() {
        const {id, image, title} = list()
        if (historyPage.includes(id)) return
        setHistoryPage(prev => [...prev, id])
        setHistoryList(prev => [...prev, {id, image, title}])
        setHistoryClicks(!historyClicks)
    }
    
    function handleSaveMangaList() {
        const {id, image, title} = list()
        if (savedMangaPages.includes(id)) {
            setResponseMessage("Manga already saved")
            return
        }
        
        setSavedMangaPages(prev => [...prev, id])
        setSaveMangaList(prev => [...prev, {id, image, title}])
        setClicks(!clicks)
    }

    return (
        <>  
            <div className="info">
                <DisplayMangaInfo mangaData={mangaData} />
                <div className="foot">
                    <div className="pagination">
                        {mangaPageNo <=1 ? 
                        <button disabled>prev</button> : 
                        <button disabled={disable}
                        onClick={() => {
                            handleManga(mangaPageNo - 1)
                            setIsNext(false)
                            }}
                        >prev</button>
                        }

                        <span>{mangaData?.mal_id}</span>
                        <button disabled={disable}
                        onClick={() => {
                            handleManga(mangaPageNo + 1)
                            handleHistory()
                            setIsNext(true)
                            }}
                        >next</button>
                        <button onClick={() => handleSaveMangaList()}>save</button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Manga

Manga.propTypes = {
    setResponseMessage:PropTypes.func
}