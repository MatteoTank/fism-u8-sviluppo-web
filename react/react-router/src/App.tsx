import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
      <Footer />  
    </>
  )
}

export default App
