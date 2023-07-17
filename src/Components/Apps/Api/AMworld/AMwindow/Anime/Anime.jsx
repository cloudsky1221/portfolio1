import { useEffect, useState } from "react";

function Anime(){

    const checkLocalStorageAnime = JSON.parse(localStorage.getItem("anime")) || {}
    const lastAnimePage = JSON.parse(localStorage.getItem("anime page")) || 1

    const [animeData, setAnimeData] = useState(checkLocalStorageAnime)
    const [animePageNo, setAnimePageNo] = useState(lastAnimePage)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        !animeData && handleAnime()
        }, [])

    function handleAnime() {
        (async () => 
        {console.log("repeat");await fetch(`https://api.jikan.moe/v4/anime/${animePageNo}`).then(res => res.json())
        .then((res) => {
            setIsLoading(false);
            if (res.status) {
            if (res.status === 400) return;
            if (res.status === 404) {
                setAnimePageNo(prev => prev + 1);
            }
            }
            else {
            localStorage.setItem("anime",JSON.stringify(res.data));
            localStorage.setItem("anime page",JSON.stringify(res.data.mal_id));
        }
        })
        .then(() => setAnimeData(JSON.parse(localStorage.getItem("anime"))))
        .catch((err) => {
            console.log(err)
        })})()
    }

    return (
        <>  
            <div className="info">
                {isLoading && <h1>loading</h1>}
                <div className="top">
                    <div className="image">
                        <img src={animeData?.images?.jpg.image_url} alt="" />
                    </div>
                    <div className="main-info">
                        <div className="title">title: {animeData?.title}</div>
                        <div className="genre"> genres: {animeData?.genres?.map(e => " " + e.name+", ")}</div>
                        <div className="demographics">demographic: {animeData?.demographics?.map(e => e.name+", ")}</div>
                        <div className="chapters">chapters: {animeData?.chapters}</div>
                        <div className="status">status: {animeData?.status}</div>
                        <div className="score">score: {animeData?.score}</div>
                        <div className="scoredby">scored-by: {animeData?.scored_by}</div>
                    </div>
                    <div className="synopsis">
                        <p>
                            {animeData?.synopsis}
                        </p>
                    </div>
                </div>
                <div className="foot">
                    <div className="pagination">
                        {animePageNo <= 1? <button disabled>prev</button> : <button onClick={() => {setAnimePageNo(animePageNo-1);handleAnime()}}>prev</button>}
                        <span>{animeData?.mal_id}</span>
                        <button onClick={() => {setAnimePageNo(animePageNo + 1);handleAnime()}}>next</button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Anime
