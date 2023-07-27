import './App.css'
import MangaWorld from './Components/Apps/Api/MangaWorld/MangaWorld'

import Background from './Components/Background/Background'

function App() {

  return (
    <>
    <div className="main">
      <div className="app">
        <MangaWorld />
      </div>
    </div>
    <Background />
    </>
  )
}

export default App