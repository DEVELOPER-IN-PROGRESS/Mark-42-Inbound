import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slice/loggedUserSlice';
import { toast} from 'react-toastify';



function Header() {
     const loggedInUser = useSelector((state) => state.loggedUserReducer)
     const dispatch = useDispatch()
    const navigate = useNavigate()
    //console.log(loggedInUser);
    
     const handlelogout =() =>{
      toast.info("Logging Out..." )
      dispatch(logout()) 
      navigate('/');
     }
  return (
    <>
      <div className='d-flex justify-content-between align-items-center bg-info'>
        <div className='d-flex'>
          <FontAwesomeIcon icon={faCoins} className='display-5 m-2' />
          <h1 className='m-2'>TrackMyCrypto</h1>
        </div>
        {Object.keys(loggedInUser).length === 0 ? <div className='d-flex'>
          <LoginButton />
          <RegisterButton /> </div> : <Button onClick={handlelogout} className='fs-5 me-3' variant="outline-dark">Logout</Button>
        }
      </div>
    </>
  )
}

export default Header