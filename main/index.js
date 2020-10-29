import { registerMicroApps, start } from 'qiankun';
import app from './app';

registerMicroApps([
  {
    name: 'react-micro-app',
    // import by js module
    entry: {
      html: '<div id="root"></div>',
      scripts: ['//localhost:8080/micro-react/dist/main.js'],
    },
    container: '#micro-app',
    activeRule: '/react-micro-app',
  },
  {
    name: 'vue-micro-app',
    // import by app (html & js)
    entry: '//localhost:8080/micro-vue/dist',
    container: '#micro-app',
    activeRule: '/vue-micro-app',
  },
]);

start();

app.$mount('#main-app');
