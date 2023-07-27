import PropTypes from "prop-types"

import "./DisplayMangaInfo.css"

function DisplayMangaInfo({mangaData}) {
    console.count("DisplayMangaInfo")
  return (
    <div className="top">
        <div className="image">
            <img src={mangaData?.images?.jpg.image_url} alt="" />
        </div>
        <div className="main-info">
            <div className="title">Title: {mangaData?.title}</div>
            <div className="author">Author: {mangaData?.authors?.map((e) => e.name.replace(",", " ")+", ")}</div>
            <div className="genre"> Genres: {mangaData?.genres?.map(e => " " + e.name+", ")}</div>
            <div className="demographics">Demographic: {mangaData?.demographics?.map(e => e.name+", ")}</div>
            <div className="chapters">Chapters: {mangaData?.chapters}</div>
            <div className="status">Status: {mangaData?.status}</div>
            <div className="score">Score: {mangaData?.score}</div>
            <div className="scoredby">Scored-by: {mangaData?.scored_by}</div>
            <div className="url">Url:<a href={mangaData?.url} target="blank"> {mangaData?.url}</a></div>
        </div>
        <div className="synopsis">
            <p>{mangaData?.synopsis}</p>
        </div>
    </div>
  )
}

export default DisplayMangaInfo

DisplayMangaInfo.propTypes = {
    mangaData:PropTypes.object
}