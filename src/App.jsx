import './App.css'
import Anime from './Components/Apps/Api/Anime/Anime'

import Background from './Components/Background/Background'

function App() {

  return (
    <>
    <div className="main">
      <div className="app">
        <Anime />
      </div>
    </div>
    <Background />
    </>
  )
}

export default App