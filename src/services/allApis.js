import { commonApi } from './commonApi'

export const getAllCoinDetailsApi = async () => {
    return await commonApi('GET', `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`)
}