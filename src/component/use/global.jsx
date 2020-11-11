import { useState, useEffect } from 'react';
import qiankunStore from '@/qiankun/store';

const getGlobalStateUse = field => () => {
  const [val, seOriginVal] = useState(qiankunStore.getState()[field]);

  // store变化时，同步到val
  useEffect(() => qiankunStore.onStateChange((state) => {
    seOriginVal(state[field]);
  }), []);

  // 调用set时，同步到store
  const setVal = (val) => {
    qiankunStore.setState({
      [field]: val,
    });

    seOriginVal(val);
  };

  return [val, setVal];
};

export const useUser = getGlobalStateUse('user');
export const useProjectID = getGlobalStateUse('projectID');
export const useAppID = getGlobalStateUse('appID');
