import store from './store';
import { registerMicroApps, start } from 'qiankun';
import { renderLoader } from '@/component/loader';
import { microAppWrapperID, microAppModuleRootID, loaderID } from '@/util/constant';
import { getMicroApps } from '@/api/micro-app';

const loader = (loading) => {
  renderLoader({
    container: document.querySelector(`#${loaderID}`),
    loading,
  });
};

const getFormattedMicroApps = async () => {
  const microApps = await getMicroApps();

  return microApps.map((microApp) => {
    let entry = null;

    switch (microApp.entryType) {
      case 'html':
        entry = microApp.entry;
        break;
      case 'js':
        entry = {
          html: `<div id="${microAppModuleRootID}"></div>`,
          scripts: [microApp.entry],
        };
        break;
      default:
        entry = microApp.entry;
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
        getGlobalState: store.getGlobalState,
        // 用来渲染的根容器id，适用于js entry的情况
        rootID: microAppModuleRootID,
      },
    };
  });
};

export const startQiankun = async () => {
  registerMicroApps(
    await getFormattedMicroApps(),
    {
      beforeLoad: [
        (app) => {
          console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        },
      ],
      beforeMount: [
        (app) => {
          console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        },
      ],
      afterUnmount: [
        (app) => {
          console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        },
      ],
    },
  );

  start({
    // sandbox: {
    //   strictStyleIsolation: true
    // }
  });
};
