import axios from 'axios';

// 统一数据处理
const handleRes = () => {

};

// 统一错误处理
const handleErr = () => {

};

export const request = options => axios.request(Object.assign({
  method: 'get',
  baseURL: '/api',
}, options))
  .then((res) => {
    handleRes(res);
    return res;
  })
  .catch((err) => {
    handleErr(err);
    throw err;
  });

export const mockResponse = data => new Promise(resolve => setTimeout(resolve, Math.random() * 600, data));
