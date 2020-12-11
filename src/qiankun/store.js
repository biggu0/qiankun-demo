import { initGlobalState } from 'qiankun'
import emitter from '@/util/emitter'
import { globalStateChannel } from '@/util/constant'

/* 和子工程共享的全局state */
let globalState = {
  user: '',
  projectID: '',
  appID: ''
}

const action = initGlobalState(globalState)

function filterState (newState) {
  // 某些字段可能不允许子工程修改，在这里拦截
  const fields = ['aaa']

  const state = { ...newState }

  if (fields.some((field) => newState[field] !== globalState[field])) {
    fields.forEach((field) => {
      state[field] = globalState[field]
    })
    action.setGlobalState(state)
  }

  return state
}

action.onGlobalStateChange((newState, prevState) => {
  console.log(`global store change: ${JSON.stringify(newState)}, prev: ${JSON.stringify(prevState)}`)

  const state = filterState(newState)

  globalState = state

  // qiankun无法注册多个onGlobalStateChange事件，故引入emitter来支持一对多通知
  emitter.emit(globalStateChannel, state)
})

function getState () {
  return JSON.parse(JSON.stringify(globalState))
}

// 绑定监听函数，并返回解绑函数
function onStateChange (handler) {
  emitter.on(globalStateChannel, handler)
  return () => emitter.off(globalStateChannel, handler)
}

const qiankunStore = {
  setState: action.setGlobalState,
  getState,
  onStateChange
}

export default qiankunStore
