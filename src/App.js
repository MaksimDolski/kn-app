import Home from "./Home"
import ThemeMode from "./ThemeMode"
import Footer from "./Footer"

function App() {

  return (
    <>
      <div className="App">
        <Home /> 
        <Footer />
      </div>
    </>
  )
  
}

export default App


// npm install --save react-router-dom
// npx json-server --watch public/data.json --port 8000