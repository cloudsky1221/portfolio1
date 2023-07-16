import './App.css'
import AMworld from './Components/Apps/Api/AMworld/AMworld'
import Shopping from './Components/Apps/Api/Shopping/Shopping'

import Background from './Components/Background/Background'

function App() {

  return (
    <>
    <div className="main">
      <div className="app">
        <Shopping />
        <AMworld />
      </div>
    </div>
    <Background />
    </>
  )
}

export default App