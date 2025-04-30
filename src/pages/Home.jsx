import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'

function Home() {
    
   const loggedInUser = useSelector((state) => state.loggedUserReducer)
  return (
    <>
    <Header/>
    <p>{loggedInUser.username}</p>
    </>
  )
}

export default Home