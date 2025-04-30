import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center bg-info'>
        <div className='d-flex'>
          <FontAwesomeIcon icon={faCoins} className='display-5 m-2' />
          <h1 className='m-2'>Trackmycrypto</h1>
        </div>
        <div>
          <Button className='fs-5 me-3' variant="outline-dark">Login</Button>
          <Button className='fs-5 me-3' variant="outline-dark">Register</Button>

        </div>
      </div>
    </>
  )
}

export default Header