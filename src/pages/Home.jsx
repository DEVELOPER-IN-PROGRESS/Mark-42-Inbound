import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { addToWatchlistApi, getAllCoinDetailsApi, getWatchlistApi } from '../services/allApis';
import { addCoinDetails } from '../redux/slice/coinDetailsSlice';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import WatchList from '../components/WatchList';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast} from 'react-toastify';

function Home() {
  const [coinDetails, setcoinDetails] = useState([])
  const [searchName, setsearchName] = useState("")
  const [searchSymbol, setSearchSymbol] = useState("")
  const [wlStatus, setwlStatus] = useState({})
  const loggedInUser = useSelector((state) => state.loggedUserReducer)
  const dispatch = useDispatch()

  const getCoinDetails = async () => {
    const result = await getAllCoinDetailsApi()
    // console.log(result.data); 
    if (result.status >= 200 && result.status < 300) {
      setcoinDetails(result.data)
    }
  }

  const addToWatchlist = async (coin) => {
    let coinToWatchlist = {
      coin: coin,
      userid: loggedInUser.id
    }
    const result = await getWatchlistApi()
    if (result.status >= 200 && result.status < 300) {
      let coinarray = result.data.filter((watch) => watch.userid == loggedInUser.id)
      let duplicate = coinarray.filter((item) => item.coin.id == coin.id)
      console.log(duplicate);
      if (duplicate.length > 0) {
        toast.error("Coin already in Watchlist")
      } else {
        const result1 = await addToWatchlistApi(coinToWatchlist)
        if (result1.status >= 200 && result1.status < 300) {
          toast.success("Coin added to Watchlist")
          setwlStatus(result1.data)
        }
       
      }
    }
  }

  useEffect(() => {
    getCoinDetails()
  }, [loggedInUser])

  return (
    <>
      <Header />
      <h3 className='mt-3 ms-3'>Welcome, {loggedInUser.name}!</h3>
      <div>
        <div className='d-md-flex justify-content-evenly'>
          <div className='col-md-8 '>
            <section>
              <h1 className='text-center'>Top 100 Coins</h1>
              <div className='my-3 d-md-flex justify-content-center align-items-center w-100 w-md-75 px-3 gap-5'>
                <div className='d-flex justify-content-center align-items-center w-md-50 w-75 mx-auto mb-3'>
                  <input onChange={(e) => setsearchName(e.target.value)} type="text" placeholder='Search by name like bitcoin, ethereum...' name="" id="" className='placeborder-secondary px-3 py-2 w-md-75 w-100' />
                  <button className='btn btn-primary px-3 py-2'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <div className='d-flex justify-content-center align-items-center w-md-50 w-75 mx-auto mb-3'>
                  <input type="text" onChange={(e) => setSearchSymbol(e.target.value)} placeholder='Search by symbol like btc,eth..' name="" id="" className='placeborder-secondary px-3 py-2 w-md-75 w-100' />
                  <button className='btn btn-primary px-3 py-2'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
              </div>

              <Row xs={1} md={2} lg={3} className='m-5 text-center '>

                {coinDetails
                  .filter((coin) =>
                    coin.name.toLowerCase().startsWith(searchName.toLowerCase()) &&
                    coin.symbol.toLowerCase().startsWith(searchSymbol.toLowerCase())
                  ).map((item, index) => (
                    <Col className='mb-3' key={index}>
                      <Card border="primary" style={{ width: '15rem' }}>
                        <Card.Header>{item.symbol}</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            <img src={item.image} className='me-1' width={'50px'} alt="" />
                            {item.name}</Card.Title>
                          <Card.Text>
                            <p>Current Price : ${item.current_price}</p>
                          </Card.Text>
                          <div className='d-flex  justify-content-around gap-3'>
                            <Link to={'/coindetails'} onClick={() => dispatch(addCoinDetails(item))}><Button className='p-1' size="sm" variant="info">View Coin Details</Button></Link>
                            <Button className='p-1' onClick={() => addToWatchlist(item)} size="sm" variant="info">Add to Watchlist</Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>

            </section>
          </div>
          <div className='col-md-3 bg-info-subtle m-2 rounded'>
            <h1 className='text-center mt-3'>Watchlist</h1>
            <WatchList wlStatus={wlStatus} />
          </div>


        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
