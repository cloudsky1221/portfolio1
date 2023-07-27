import { useEffect, useState } from "react"
import PropTypes from "prop-types"

import "./SavedMangaList.css"
import DisplayMangaInfo from "../Manga/DisplayMangaInfo"


function SavedMangaList({setResponseMessage}) {

    
    const mangaList = JSON.parse(localStorage.getItem("savedMangaList")) || []
    
    const [ isDisplayOpen, setIsDisplayOpen ] = useState(false)
    const [ mangaData, setMangaData ] = useState({})
    
    const [pageNo, setPageNo] = useState(1)
    
    console.log(pageNo*(mangaList.length % 6))
    // const [saveMangaList, setSaveMangaList] = useState(mangaList)

    useEffect(() => {
        mangaList.length === 0 ? setResponseMessage("The saved manga list is empty. Please save to see the list") : setResponseMessage("Click on the show more button to see full detail.")
    }, [])

    function handleInfo(pageNumber) {
        setIsDisplayOpen(true)
        setResponseMessage("To know more you can go to www.google.com")
        fetch(`https://api.jikan.moe/v4/manga/${pageNumber}`).then(res => res.json())
        .then((res) => {
            // setIsLoading(false);
            if (res.status) {
              if (res.status === 400) return;
            }
            setMangaData(res.data)
        })
        .catch((err) => {
            console.log(err)
    })}
    

    return (
        <>
        <button onClick={() => setIsDisplayOpen(false)}>back</button>
        {isDisplayOpen ? <DisplayMangaInfo mangaData={mangaData}/>:
            <ul className="manga-list">
                {mangaList.slice((pageNo-1) * 6, pageNo * 6).map((e, i) => {
                    return (
                        <li key={i} className="data">
                            <div className="image"> <img src={e?.image} alt="" /></div>
                            <div className="title">{e?.title}</div>
                            <button onClick={() => handleInfo(e?.id)}>show more</button>
                        </li>
                    )
                })}
            </ul>
        }
        <div className="foot">
                    <div className="pagination">
                        {pageNo <= 1 ? <button disabled>prev</button> : <button onClick={() => setPageNo(pageNo - 1)}>prev</button>}
                        <span>{pageNo}</span>
                        {pageNo >= Math.ceil(mangaList.length/6) ? <button disabled>next</button> : <button onClick={() => setPageNo(pageNo + 1)}>next</button>}
                    </div>
                </div>
        </>
        )
}

export default SavedMangaList

SavedMangaList.propTypes = {
    setResponseMessage:PropTypes.func
}