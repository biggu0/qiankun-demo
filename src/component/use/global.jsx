import { useState, useEffect } from 'react';
import qiankunStore from '@/qiankun/store';

const getGlobalStateUse = field => () => {
  const [val, setVal] = useState(qiankunStore.getState()[field]);

  useEffect(() => qiankunStore.onStateChange((state) => {
    setVal(state[field]);
  }), []);

  return [val, setVal];
};

export const useUser = getGlobalStateUse('user');
export const useProjectID = getGlobalStateUse('projectID');
export const useAppID = getGlobalStateUse('appID');
