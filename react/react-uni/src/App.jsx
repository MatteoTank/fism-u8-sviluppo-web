import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import UniPage from "./pages/UniPage"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element = {<HomePage />} />
      <Route path="/uni" element = {<UniPage />} />
    </Routes>
    </>
  )
}

export default App
