import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import { getCoinApi } from '../services/allApis'
import { Link } from 'react-router-dom'

function CoinDetails() {
    const coinDetails = useSelector((state) => state.coinDetailsReducer)
    const loggedInUser = useSelector((state) => state.loggedUserReducer)

    const [coin, setCoin] = useState([
        {
            "id": coinDetails.id,
            "symbol": coinDetails.symbol,
            "name": coinDetails.name,
            "image": coinDetails.image,
            "current_price": 0,
            "market_cap": 0,
            "market_cap_rank": 0,
            "fully_diluted_valuation": 0,
            "total_volume": 0,
            "high_24h": 0,
            "low_24h": 0,
            "price_change_24h": 0,
            "price_change_percentage_24h": 0,
            "market_cap_change_24h": 0,
            "market_cap_change_percentage_24h": 0,
            "circulating_supply": 0,
            "total_supply": 0,
            "max_supply": 0,
            "ath": 0,
            "ath_change_percentage": 0,
            "ath_date": "1970-01-01T00:00:00.000Z",
            "atl": 0,
            "atl_change_percentage": 0,
            "atl_date": "1970-01-01T00:00:00.000Z",
            "roi": null,
            "last_updated": "1970-01-01T00:00:00.000Z"
        }
    ])

    const getCoin = async () => {
       // console.log(coinDetails.id);

        const result = await getCoinApi(coinDetails.id)
        if (result.status >= 200 && result.status < 300) {
            setCoin(result.data)
           // console.log(result.data);

        }
    }
    useEffect(() => {
        getCoin()
    }, [])
    return (
        <>
            <Header />
            <div>
                <div className='d-flex justify-content-evenly'>
                    <h1 className='text-center mt-5'>{coin[0].name}</h1>
                    {Object.keys(loggedInUser).length === 0 ? <div>
           </div> :<Link to={'/home'}><button className='btn btn-info  mt-5'>Back Home</button></Link>
        }


                </div>
                <div className='row m-5 p-3 bg-info-subtle rounded fw-bold'>
                    <div className='col-12 col-md-4'>
                        <div className='d-flex  align-items-center mb-3'>
                            <img src={coin[0].image} className='me-1' width={'50px'} alt="" />
                            <h4>{coin[0].symbol.toUpperCase()}</h4>
                        </div>
                        <p>Current Price: ${coin[0].current_price}</p>
                        <p>Lowest price in the past 24 hours: ${coin[0].low_24h}</p>
                    </div>
                    <div className='col-12 col-md-4 mt-3'>
                        <p>Highest price in the past 24 hours: ${coin[0].high_24h}</p>
                        <p>Price change over the last 24 hours: ${coin[0].price_change_24h}</p>
                        <p>% change in price over the last 24 hours: <span className={coin[0].price_change_percentage_24h < 0 ? 'text-danger' : 'text-success'}>{coin[0].price_change_percentage_24h}</span></p>
                    </div>
                    <div className='col-12 col-md-4 mt-3'>
                        <p>Rank of the coin by market cap: {coin[0].market_cap_rank}</p>
                        <p>All-time high price: ${coin[0].ath}</p>
                        <p>% difference from all-time high: <span className={coin[0].ath_change_percentage < 0 ? 'text-danger' : 'text-success'}>{coin[0].ath_change_percentage}</span></p>
                    </div>
                    <p className='text-end'>
                        Last time the data was updated: {
                            new Date(coin[0].last_updated).toLocaleString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: true
                            })
                        }
                    </p>                </div>
            </div>
            <Footer />
        </>
    )
}

export default CoinDetails