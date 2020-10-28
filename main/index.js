import { registerMicroApps, start } from 'qiankun';
import app from './app';

registerMicroApps([
  {
    name: 'react-micro-app',
    entry: '//localhost:8080/micro-react/dist/main.js',
    container: '#micro-app',
    activeRule: '/react-micro-app',
  },
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#yourContainer2',
  //   activeRule: '/yourActiveRule2',
  // },
]);

start();

app.$mount('#main-app');
