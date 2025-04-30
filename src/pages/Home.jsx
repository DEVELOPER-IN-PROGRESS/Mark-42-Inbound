import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAllCoinDetailsApi } from '../services/allApis';
import { addCoinDetails } from '../redux/slice/coinDetailsSlice';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';




function Home() {
    const [coinDetails, setcoinDetails] = useState([])
    const loggedInUser = useSelector((state) => state.loggedUserReducer)
const dispatch = useDispatch()

  const getCoinDetails = async () => {
    const result = await getAllCoinDetailsApi()
   // console.log(result.data); 
    if (result.status >= 200 && result.status < 300) {
      setcoinDetails(result.data)
    }
  }

  useEffect(() => { 
   getCoinDetails()
  }, [])
    
  
  return (
    <>
    <Header/>
    <h3 className='mt-3 ms-3'>Welcome, {loggedInUser.name}!</h3>
    <div>
        <div className='d-md-flex justify-content-evenly'>
            <div className='col-md-8 '>
            <section>
      <h1 className='text-center'>Currency List</h1>
      <div className='my-3 d-md-flex justify-content-center align-items-center w-100 w-md-75 px-3 gap-5'>
      <div className='d-flex justify-content-center align-items-center w-md-50 w-75 mx-auto mb-3'>
        <input type="text" placeholder='Search by name' name="" id="" className='placeborder-secondary px-3 py-2 w-md-75 w-100' />
        <button className='btn btn-primary'>Search</button>
      </div>
      <div className='d-flex justify-content-center align-items-center w-md-50 w-75 mx-auto mb-3'>
        <input type="text" placeholder='Search by symbol' name="" id="" className='placeborder-secondary px-3 py-2 w-md-75 w-100' />
        <button className='btn btn-primary'>Search</button>
      </div>
      </div>

      <Row  xs={1} md={2} lg={3} className='m-5 text-center '>
        
        {coinDetails.map((item, index) => (
         <Col className='mb-3' key={index}>
         <Link to={'/coindetails'} onClick={()=>dispatch(addCoinDetails(item))} style={{textDecoration:"none"}}> 
           <Card border="primary" style={{ width: '15rem' }}>
           <Card.Header>{item.symbol.toUpperCase()}</Card.Header>
           <Card.Body>
             <Card.Title>
               <img src={item.image} className='me-1' width={'50px'} alt="" />
               {item.name}</Card.Title>
             <Card.Text>
               <p>Current Price : ${item.current_price}</p>
             </Card.Text>
             <div className='text-center'><Button size="sm" variant="info">Add to Watchlist</Button></div>
           </Card.Body>
         </Card>
         </Link>
         </Col>
        ))}
        
      </Row>

      

      </section>
            </div>
            <div className='col-md-3 bg-info-subtle m-2 rounded'>2</div>


        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home