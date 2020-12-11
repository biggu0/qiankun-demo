import { start } from 'qiankun'
import { renderLoader } from '@/component/loader'
import { microAppWrapperID, microAppModuleRootID, loaderID } from '@/util/constant'
import store from './store'

const loader = (loading) => {
  renderLoader({
    container: document.querySelector(`#${loaderID}`),
    loading
  })
}

export const getFormattedMicroApps = (microApps) => microApps.map((microApp) => {
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
    // 提供子工程的参数
    props: {
      // 除了原本的set和onchange，再加上get方法，用来初始化
      getGlobalState: store.getState,
      // 用来渲染的根容器id，适用于js entry的情况
      rootID: microAppModuleRootID
    }
  }
})

export const startQiankun = async () => {
  // 跳过register，需要加载微应用时手动调用load方法

  start({
    // 把sandbox关掉，module federation即可正常运行
    // sandbox: false,
  })
}
