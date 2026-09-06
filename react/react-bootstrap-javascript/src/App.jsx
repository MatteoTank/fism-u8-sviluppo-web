import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import UsersPage from "./pages/UsersPage"
import CounterPage from "./pages/CounterPage"
import ProductsPage from "./pages/ProductsPage"
import RecipesPage from "./pages/RecipesPage"
import UserDetailPage from "./pages/UserDetailPage"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element= { <HomePage/> } />
        <Route path="/users" element= { <UsersPage/> } />
        <Route path="/users/:id" element= { <UserDetailPage /> } />
        <Route path="/counter" element= { <CounterPage/> } />
        <Route path="/products" element= { <ProductsPage/> } />
        <Route path="/recipes" element= { <RecipesPage/> } />
      </Routes>
    </>
  )
}

export default App
