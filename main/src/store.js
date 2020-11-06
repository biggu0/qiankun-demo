import { initGlobalState } from 'qiankun'

let state = {
  name: 'nossika',
  timestamp: Date.now()
}

const action = initGlobalState(state)

action.onGlobalStateChange((newState, prevState) => {
  console.log('global store change: ', newState, prevState)
  state = newState
})

function getGlobalState () {
  return JSON.parse(JSON.stringify(state))
}

export default {
  action,
  getGlobalState
}
