import axios from 'axios'
import http from './http'

const getMock = () => {
    return axios.get('/products')
}
export const getCompanyList = () => {
    return http('get', '/page/list', '')
}


export {
    getMock
}