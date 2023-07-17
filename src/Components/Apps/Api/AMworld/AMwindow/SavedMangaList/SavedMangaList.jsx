// import { useState } from "react"

function SavedMangaList() {

    const mangaList = JSON.parse(localStorage.getItem("savedMangaList")) || []

    // const [saveMangaList, setSaveMangaList] = useState(mangaList)

    return (
        <>
            <ul>
                {mangaList.map((e, i) => {
                    return (
                        <li key={i} className="data">
                            <div className="image"> <img src={e?.image} alt="" /></div>
                            <div className="title">{e?.title}</div>
                        </li>
                    )
                })}
            </ul>
        </>
        )
}

export default SavedMangaList