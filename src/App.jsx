import './App.css'
import AMworld from './Components/Apps/Api/AMworld/AMworld'
import Products from './Components/Apps/Api/Products/Products'

import Background from './Components/Background/Background'

function App() {

  return (
    <>
    <div className="main">
      <div className="app">
        <Products />
        <AMworld />
      </div>
    </div>
    <Background />
    </>
  )
}

export default App