import store from './store'
import { registerMicroApps, start } from 'qiankun'
import { renderLoader } from '@/component/loader'
import { microAppWrapperID, microAppModuleRootID, loaderID } from '@/util/constant'

const loader = loading => {
  renderLoader({
    container: document.querySelector(`#${loaderID}`),
    loading
  })
}

const getMicroApps = async () => {
  // mock
  const microApps = [
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
  ]

  return microApps.map(microApp => {
    let entry = null

    switch (microApp.entryType) {
      case 'html':
        entry = microApp.entry
        break
      case 'js':
        entry = {
          html: `<div id="${microAppModuleRootID}"></div>`,
          scripts: [microApp.entry]
        }
        break
      default:
        entry = microApp.entry
    }

    return {
      name: microApp.name,
      activeRule: microApp.route,
      entry,
      container: `#${microAppWrapperID}`,
      loader,
      props: {
        getGlobalState: store.getGlobalState,
        rootID: microAppModuleRootID
      }
    }
  })
}

export default async () => {
  const apps = await getMicroApps()
  registerMicroApps(apps)

  start({
    // sandbox: {
    //   strictStyleIsolation: true
    // }
  })
}
