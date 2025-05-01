import { commonApi } from './commonApi'
import { serverurl } from './serverurl'

export const getAllCoinDetailsApi = async () => {
    return await commonApi('GET', `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
}

// to get all users
export const getAllUsersApi = async () => {
    return await commonApi('GET', `${serverurl}/users`)
}

//to add a user
export const addUserApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/users`,reqBody)
}
//get details of a single coin
export const getCoinApi = async (id) => {
    return await commonApi('GET', `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`)
}


// to update watchlist
export const addToWatchlistApi = async (reqBody) => {
    return await commonApi('POST', `${serverurl}/watchlist`,reqBody)
}

//get watchlist
export const getWatchlistApi = async () => {
    return await commonApi('GET', `${serverurl}/watchlist`)
}

//delete from watchlist
export const deletefromWatchlistApi = async (id) => {
    return await commonApi('DELETE', `${serverurl}/watchlist/${id}`,{})
}