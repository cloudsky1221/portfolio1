import { useEffect, useState } from "react";

function Manga(){

    const checkLocalStorageManga = JSON.parse(localStorage.getItem("manga")) || {}
    const lastMangaPage = JSON.parse(localStorage.getItem("manga page")) || 1
    const mangaList = JSON.parse(localStorage.getItem("savedMangaList")) || []

    const [mangaData, setMangaData] = useState(checkLocalStorageManga)
    const [mangaPageNo, setMangaPageNo] = useState(lastMangaPage)
    const [saveMangaList, setSaveMangaList] = useState(mangaList)

    useEffect(() => {
        // setIsLoading(true);
    !mangaData && handleManga()
    
    }, [])

    function handleManga() {
        (async () => 
        {console.log("repeat");await fetch(`https://api.jikan.moe/v4/manga/${mangaPageNo}`).then(res => res.json())
        .then((res) => {
            // setIsLoading(false);
            if (res.status) {
              if (res.status === 400) return;
              if (res.status === 404) {
                setMangaPageNo(prev => prev + 1);
              }
            }
            else {
              localStorage.setItem("manga",JSON.stringify(res.data));
              localStorage.setItem("manga page",JSON.stringify(res.data.mal_id));
          }
        })
        .then(() => setMangaData(JSON.parse(localStorage.getItem("manga"))))
        .catch((err) => {
            console.log(err)
        })})()
    }

    function handleSaveMangaList() {

        const image = mangaData?.images?.jpg.small_image_url
        const title = mangaData?.title

        setSaveMangaList(prev => [...prev, {image, title} ])
        localStorage.setItem("savedMangaList", JSON.stringify(saveMangaList))

    }

    return (
        <>  
            <div className="info">
                <div className="top">
                    <div className="image">
                        <img src={mangaData?.images?.jpg.image_url} alt="" />
                    </div>
                    <div className="main-info">
                        <div className="title">title: {mangaData?.title}</div>
                        <div className="author">author: {mangaData?.authors?.map((e) => e.name)}</div>
                        <div className="genre"> genres: {mangaData?.genres?.map(e => " " + e.name+", ")}</div>
                        <div className="demographics">demographic: {mangaData?.demographics?.map(e => e.name+", ")}</div>
                        <div className="chapters">chapters: {mangaData?.chapters}</div>
                        <div className="status">status: {mangaData?.status}</div>
                        <div className="score">score: {mangaData?.score}</div>
                        <div className="scoredby">scored-by: {mangaData?.scored_by}</div>
                    </div>
                    <div className="synopsis">
                        <p>
                            {mangaData?.synopsis}
                        </p>
                    </div>
                </div>
                <div className="foot">
                    <div className="pagination">
                        {mangaPageNo <=1? <button disabled>prev</button> : <button onClick={() => {setMangaPageNo(mangaPageNo-1);handleManga()}}>prev</button>}
                        <span>{mangaData?.mal_id}</span>
                        <button onClick={() => {setMangaPageNo(mangaPageNo + 1);handleManga()}}>next</button>
                        <button onClick={handleSaveMangaList}>save</button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Manga