import { request, mockResponse } from './index'

export const getMicroApps = (params) => {
  return mockResponse([
    {
      name: 'react-micro-app',
      entry: '//localhost:8000/micro-react/dist/main.js',
      entryType: 'js',
      route: '/react-micro-app'
    },
    {
      name: 'vue-micro-app',
      entry: '//localhost:8000/micro-vue/dist/index.html',
      entryType: 'html',
      route: '/vue-micro-app'
    }
  ])
}

export const test = (params) => {
  return request({
    url: '/test',
    params
  })
}
