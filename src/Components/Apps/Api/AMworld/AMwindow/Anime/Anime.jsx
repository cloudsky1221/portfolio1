import { useEffect } from "react";

import PropTypes from "prop-types";

function Anime({data, set, page, hand}){

    // console.log(data)

    useEffect(() => {
        hand("https://api.jikan.moe/v4/anime", page.number, "anime", set, page.set)
    }, [page.number])

    return (
        <>  
            <div className="info">
                <div className="top">
                    <div className="image">
                        <img src={data?.images.jpg.image_url} alt="" />
                    </div>
                    <div className="main-info">
                        <div className="title">title: {data?.title}</div>
                        <div className="genre"> genres: {data?.genres.map(e => " " + e.name+", ")}</div>
                        <div className="demographics">demographic: {data?.demographics.map(e => e.name+", ")}</div>
                        <div className="chapters">chapters: {data?.chapters}</div>
                        <div className="status">status: {data?.status}</div>
                        <div className="score">score: {data?.score}</div>
                        <div className="scoredby">scored-by: {data?.scored_by}</div>
                    </div>
                    <div className="synopsis">
                        <p>
                            {data?.synopsis}
                        </p>
                    </div>
                </div>
                <div className="foot">
                    <div className="pagination">
                        {page.number===1? <button disabled>prev</button> : <button onClick={() => {page.set(page.number-1)}}>prev</button>}
                        <span>{data?.mal_id}</span>
                        <button onClick={() => {page.set(page.number + 1)}}>next</button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Anime

Anime.propTypes = {
    data:PropTypes.object,
    set:PropTypes.func,
    page:PropTypes.object,
    hand:PropTypes.func,
}