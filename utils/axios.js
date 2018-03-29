import axios from 'axios'
import qs from 'qs'
import { getAccessToken } from './index'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(config => {
    let accesstoken = getAccessToken(config)

    if (config.method === 'get') {
        config.params = config.params || {}
        accesstoken && (config.params.accesstoken = accesstoken)
    } else if (config.method === 'post') {
        config.data = config.data || {}
        accesstoken && (config.data.accesstoken = accesstoken)
        config.data = qs.stringify(config.data)
    }

    return config
}, err => Promise.reject(err))

// 响应拦截器
axios.interceptors.response.use(response => {
    return response && response.data
}, err => Promise.reject(err))

export default axios