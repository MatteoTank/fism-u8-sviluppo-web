import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import UsersPage from '../pages/UsersPage'
import CounterPage from '../pages/CounterPage'
import ProductPage from '../pages/ProductsPage'
import RecipesPage from '../pages/RecipesPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />&nbsp;|&nbsp;
      <Route path='/users' element={ <UsersPage /> } />&nbsp;|&nbsp;
      <Route path='/counter' element={ <CounterPage /> } />
      <Route path='/products' element={ <ProductPage /> } />
      <Route path='/recipes' element={ <RecipesPage /> } />
    </Routes>
  )
}

export default AppRoutes