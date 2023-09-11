import { Routes, Route } from "react-router-dom"

import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage"
import HargaPage from "./pages/HargaPage"
import TestiPage from "./pages/TestiPage"


function App() {
  return <div>
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/harga" Component={HargaPage}/>
      <Route path="/testi" Component={TestiPage}/>
    </Routes>

    <FooterComponent/>
  </div>
}

export default App
