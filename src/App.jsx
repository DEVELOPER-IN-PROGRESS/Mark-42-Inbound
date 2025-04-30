import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import CoinDetails from './pages/CoinDetails'
import Home from './pages/Home'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/coindetails' element={<CoinDetails />} />
        <Route path='/home' element={<Home/>} />

      </Routes>
    </>
  )
}

export default App
