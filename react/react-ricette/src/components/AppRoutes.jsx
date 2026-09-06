import { Route, Routes } from 'react-router'
import Homepage from '../pages/Homepage'
import Ricette from '../pages/Ricette'

function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route path="/ricette" element={ <Ricette /> } />
    </Routes>
  )
}

export default AppRoutes