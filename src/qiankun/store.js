import { initGlobalState } from 'qiankun';

/* 和子工程共享的全局state */
let globalState = {
  user: 'nossika',
  projectID: '',
  appID: '',
};

const action = initGlobalState(globalState);

action.onGlobalStateChange((newState, prevState) => {
  console.log('global store change: ', newState, prevState);
  globalState = newState;
});

function getGlobalState() {
  return JSON.parse(JSON.stringify(globalState));
}

export default {
  action,
  getGlobalState,
};
