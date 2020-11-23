import React, { useState, useEffect, useRef } from 'react';
import { loadMicroApp } from 'qiankun';
import { getMicroApps } from '@/api/micro-app';
import { getFormattedMicroApps } from '@/qiankun/starter';
import { microAppWrapperID, loaderID } from '@/util/constant';

const beforeAppMount = async (appConf) => {
  // 在这里处理load前的逻辑
  console.log('beforeAppMount', appConf);
};

export default function AppLoader({ appID }) {
  const appRef = useRef(null);
  const [appConfList, setAppConfList] = useState([]);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    (async () => {
      const appConfList = getFormattedMicroApps(await getMicroApps());
      setAppConfList(appConfList);
    })();
  }, []);

  useEffect(() => {
    setIs404(false);
    if (!appID || !appConfList.length) return;
    (async () => {
      const conf = appConfList.find(conf => conf.activeRule === `/${appID}`);

      if (!conf) {
        setIs404(true);
        return;
      }

      await beforeAppMount(conf);

      appRef.current = loadMicroApp(conf);
    })();

    return () => {
      appRef.current && appRef.current.unmount();
      appRef.current = null;
    };
  }, [appConfList, appID]);

  return (
    <div>
      <div>
        {is404 ? '404' : null}
      </div>
      <div id={loaderID}></div>
      <div id={microAppWrapperID}></div>
    </div>
  );
};
