import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import HomePage from "./pages/home/HomePage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <TopBar/>
          <Navbar/>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </div>
        <div>
          Footer
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
