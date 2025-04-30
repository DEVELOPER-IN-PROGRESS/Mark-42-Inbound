import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAllCoinDetailsApi } from '../services/allApis';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCoinDetails } from '../redux/slice/coinDetailsSlice';
import Footer from '../components/Footer';


function LandingPage() {
const [coinDetails, setcoinDetails] = useState([])
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
      <Header />
      <div className='container'>
        <div className="row">
          <div className="col my-auto mt-3 mt-md-auto">
            <h3>Your Window to the World of Crypto</h3>
            <p>Track live prices of top cryptocurrencies and build your personal watchlist.
              Get a clear, real-time view of the crypto market — all in one powerful yet simple dashboard.</p>
          </div>
          <div className="col text-center">
            <img src="https://cdn.dribbble.com/userupload/42023540/file/original-ff54d853c74babb3b4d5617b40c4a503.gif" width={'400px'} alt="" />
          </div>
        </div>
      </div>
      {/* Features */}
      <section>
        <h1 className='text-center'>Features</h1>
        <Row xs={1} md={2} lg={4} className='m-5 text-center '>
          <Col>
            <Card
              bg={"info-subtle"}
              text={'dark'}
              className="mb-2 w-75 mx-auto"            >
              <Card.Header  className='fw-bold text-center'>🔄 Live Market Prices</Card.Header>
              <Card.Body>
                <Card.Text className='fw-bold text-center'>
                via CoinGecko API
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg={"info-subtle"}
              text={'dark'}
              className="mb-2 w-75 mx-auto"            >
              <Card.Header  className='fw-bold text-center'>⭐ Personal Watchlist</Card.Header>
              <Card.Body>
                <Card.Text className='fw-bold text-center'>
                add coins you care about
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg={"info-subtle"}
              text={'dark'}
              className="mb-2 w-75 mx-auto"            >
              <Card.Header  className='fw-bold text-center'>🔍 Search & Filter</Card.Header>
              <Card.Body>
                <Card.Text className='fw-bold text-center'>
                any coin by name or symbol
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              bg={"info-subtle"}
              text={'dark'}
               className="mb-2 w-75 mx-auto"
            >
              <Card.Header  className='fw-bold text-center'>📱 Responsive Design</Card.Header>
              <Card.Body>
                <Card.Text className='fw-bold text-center'>
                view on mobile and laptops
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      {/* Currency list */}
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

      <Row  xs={1} md={2} lg={4} className='m-5 text-center '>
        
        {coinDetails.map((item, index) => (
         <Col className='mb-3' key={index}>
         <Link to={'/coindetails'} onClick={()=>dispatch(addCoinDetails(item))} style={{textDecoration:"none"}}>
           <Card border="primary" style={{ width: '18rem' }}>
           <Card.Header>{item.symbol.toUpperCase()}</Card.Header>
           <Card.Body>
             <Card.Title>
               <img src={item.image} className='me-1' width={'50px'} alt="" />
               {item.name}</Card.Title>
             <Card.Text>
               <h4>Current Price : ${item.current_price}</h4>
             </Card.Text>
           </Card.Body>
         </Card>
         </Link>
         </Col>
        ))}
        
      </Row>

      

      </section>
      <Footer/>

    </>
  )
}

export default LandingPage