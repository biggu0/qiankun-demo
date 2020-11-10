import axios from 'axios'

export const request = (options) => {
  return axios.request(Object.assign({
    method: 'get',
    baseURL: '/api'
  }, options))
    .then(res => {
    // 统一数据处理
      return res
    })
    .catch(err => {
    // 统一错误处理
      throw err
    })
}

export const mockResponse = (data) => {
  return new Promise(resolve => setTimeout(resolve, Math.random() * 600, data))
}
