import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'

function CoinDetails() {
    const coinDetails = useSelector((state) => state.coinDetailsReducer)
    
    return (
        <>
            <Header />
            <div>
                <h1 className='text-center mt-5'>{coinDetails.name}</h1>
                <div className='row m-5 p-3 bg-info-subtle rounded'>
                    <div className='col-12 col-md-4 text-center'>
                        <p>djcndc</p>
                        <p>wdnc dm</p>
                    </div>
                    <div className='col-12 col-md-4 text-center'>2</div>
                    <div className='col-12 col-md-4 text-center'>3</div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CoinDetails