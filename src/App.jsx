import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import CoinDetails from './pages/CoinDetails'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/coindetails' element={<CoinDetails />} />
      </Routes>
    </>
  )
}

export default App
