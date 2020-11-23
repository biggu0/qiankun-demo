import { request, mockResponse } from './index';

export const getMicroApps = () => mockResponse([
  {
    name: 'react-micro-app',
    entry: '//localhost:8000/react17/dist/main.js',
    entryType: 'js',
    route: '/react-micro-app',
  },
  {
    name: 'vue-micro-app',
    entry: '//localhost:8000/vue2.6/dist/index.html',
    entryType: 'html',
    route: '/vue-micro-app',
  },
  {
    name: 'module-federation',
    entry: '//localhost:8000/module-federation/dist/main.js',
    entryType: 'js',
    route: '/module-federation',
  },
]);

export const test = params => request({
  url: '/test',
  params,
});
