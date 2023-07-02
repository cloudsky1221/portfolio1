import './App.css'
import AMworld from './Components/Apps/Api/AMworld/AMworld'

import Background from './Components/Background/Background'

function App() {

  return (
    <>
    <div className="main">
      <div className="app">
        <AMworld />
      </div>
    </div>
    <Background />
    </>
  )
}

export default App