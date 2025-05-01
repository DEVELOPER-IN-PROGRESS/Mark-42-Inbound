import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { deletefromWatchlistApi, getWatchlistApi } from '../services/allApis'




function WatchList({ wlStatus }) {

  const loggedInUser = useSelector((state) => state.loggedUserReducer)
  const [wl, setwl] = useState({})
  const [deleteStatus, setdeleteStatus] = useState({})


  const getWatchlist = async () => {
    const result = await getWatchlistApi()
    if (result.status >= 200 && result.status < 300) {
      let watchlist = result.data.filter((watch) => watch.userid == loggedInUser.id)
      setwl(watchlist);
    }
  }
  const deletefromWatchlist = async (id) => {
    const result1 = await deletefromWatchlistApi(id)
    if (result1.status >= 200 && result1.status < 300) {
      setdeleteStatus(result1.data);

    }
  }
  useEffect(() => {
    getWatchlist()
  }, [loggedInUser, deleteStatus, wlStatus])
  return (
    <>
      {wl?.length > 0 ?
        wl.map((item, key) => (<div>
          <div className='d-flex justify-content-evenly align-items-center gap-3 bg-white border border-primary rounded my-3 mx-5 py-2 px-4 text-center'>
            <div>
              <div className='d-flex justify-content-center  align-items-center'>
                <img src={item?.coin.image} className='me-1' width={'50px'} alt="" />
                <h5>{item?.coin.name}</h5>
              </div>
              <p>Current Price : ${item?.coin.current_price}</p>
            </div>
            <div>
              <button onClick={() => deletefromWatchlist(item?.id)} className='btn bg-danger text-white'><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
          </div>
        </div>))
        : <div className='text-center mt-5'>No Coins in Watchlist</div>}

    </>
  )
}

export default WatchList