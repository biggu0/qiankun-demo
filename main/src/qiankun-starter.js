import store from './store'
import { registerMicroApps, start } from 'qiankun'

export default () => {
  registerMicroApps([
    {
      name: 'react-micro-app',
      // import by js module
      entry: {
        html: '<div id="root"></div>',
        scripts: ['//localhost:8000/micro-react/dist/main.js']
      },
      container: '#micro-app',
      activeRule: '/react-micro-app',
      props: {
        getGlobalState: store.getGlobalState
      }
    },
    {
      name: 'vue-micro-app',
      // import by app (html & js)
      entry: '//localhost:8000/micro-vue/dist/index.html',
      container: '#micro-app',
      activeRule: '/vue-micro-app',
      props: {
        getGlobalState: store.getGlobalState
      }
    }
  ])

  start({
    // sandbox: {
    //   strictStyleIsolation: true
    // }
  })
}
