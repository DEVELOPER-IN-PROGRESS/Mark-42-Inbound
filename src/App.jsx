import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import CoinDetails from './pages/CoinDetails'
import Home from './pages/Home'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/coindetails' element={<CoinDetails />} />
        <Route path='/home' element={<Home/>} />

      </Routes>
      <ToastContainer position='top-center' autoClose={3000} theme='colored' />
    </>
  )
}

export default App
