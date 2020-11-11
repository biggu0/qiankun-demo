import emitter from '@/util/emitter';
import { globalStateChannel } from '@/util/constant';

/* 和子工程共享的全局state */
let globalState = {
  user: 'nossika',
  projectID: '',
  appID: '',
};

const onStateChange = (fn) => {
  emitter.on(globalStateChannel, fn);

  return () => emitter.off(globalStateChannel, fn);
};

const filterState = (newState) => {
  const state = Object.assign({}, globalState, newState);

  // 某些字段可能不允许子工程修改，在这里拦截
  state.user = globalState.user;

  return state;
};

const setState = (newState) => {
  console.log(`global store change: ${JSON.stringify(newState)}, prev: ${JSON.stringify(globalState)}`);
  globalState = filterState(newState);

  emitter.emit(globalStateChannel, globalState);
};

const getState = () => JSON.parse(JSON.stringify(globalState));

const store = {
  setState,
  getState,
  onStateChange,
};

export default store;
