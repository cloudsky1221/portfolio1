import PropTypes from "prop-types"
import "./History.css"
import { useEffect, useState } from "react"

function History({setResponseMessage}) {


    const [mangaPage, setMangaPage] = useState(JSON.parse(localStorage.getItem("historyPage")) || [])
    const [mangaList, setMangaList] = useState(JSON.parse(localStorage.getItem("historyList")) || [])
    
    // const [ mangaData, setMangaData ] = useState({})
    
    const [pageNo, setPageNo] = useState(1)

    const [clicks, setClicks] = useState(false)

    // const [saveMangaList, setSaveMangaList] = useState(mangaList)
    useEffect(() => setResponseMessage("Your Search History"),[])

    useEffect(() => {
        mangaList.length === 0 ? setResponseMessage("The saved manga list is empty. Please save to see the list") : setResponseMessage("Click on the show more button to see full detail.")
    }, [])

    useEffect(() => {
        localStorage.setItem("historyPage",JSON.stringify(mangaPage))
        localStorage.setItem("historyList", JSON.stringify(mangaList))
    }, [clicks])

    function handleInfo(pageNumber) {
        setResponseMessage("To know more you can go to www.google.com")
        fetch(`https://api.jikan.moe/v4/manga/${pageNumber}`).then(res => res.json())
        .then((res) => {
            // setIsLoading(false);
            if (res.status) {
              if (res.status === 400) return;
            }
            // setMangaData(res.data)
        })
        .catch((err) => {
            console.log(err)
    })}
    
    function deleteOne(id) {
        setMangaPage(mangaPage.filter(e => e !== id))
        setMangaList(mangaList.filter(e => e.id !== id))
        setClicks(!clicks)
    }

    return (
        <>
            <ul className="manga-list">
                {mangaList.slice((pageNo-1) * 6, pageNo * 6).map((e, i) => {
                    return (
                        <li key={i} className="data">
                            <div className="image"> <img src={e?.image} alt="" /></div>
                            <div className="title">{e?.title}</div>
                            <button onClick={() => handleInfo(e?.id)}>show more</button>
                            <button onClick={() => deleteOne(e?.id)}>delete</button>
                        </li>
                    )
                })}
            </ul>
        
        <div className="list-foot">
                    <div className="pagination">
                        {pageNo <= 1 ? <button disabled>prev</button> : <button onClick={() => setPageNo(pageNo - 1)}>prev</button>}
                        <span>{pageNo}</span>
                        {pageNo >= Math.ceil(mangaList.length/6) ? <button disabled>next</button> : <button onClick={() => setPageNo(pageNo + 1)}>next</button>}
                    </div>
                </div>
        </>
  )
}

export default History

History.propTypes = {
    setResponseMessage:PropTypes.func
}