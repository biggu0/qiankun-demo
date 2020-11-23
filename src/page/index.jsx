import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useUser, useProjectID, useAppID } from '@/component/use/global';
import { getUserInfo } from '@/api/user';
import history from '@/util/history';
import AppLoader from '@/component/app-loader';

export default function Index({ route, match }) {
  const { projectID: mProjectID, appID: mAppID, microApp } = match.params;

  const [user, setUser] = useUser();
  const [projectID, setProjectID] = useProjectID();
  const [appID, setAppID] = useAppID();

  useEffect(() => {
    getUserInfo().then((res) => {
      setUser(res.name);
    });
  }, []);

  useEffect(() => {
    setProjectID(mProjectID);
  }, [mProjectID]);

  useEffect(() => {
    setAppID(mAppID);
  }, [mAppID]);

  const routeTo = (url) => {
    history.push(url);
  };

  return (
    <div>
      <div>
        <button onClick={() => routeTo('/')}>main</button>
        <button onClick={() => routeTo('/child')}>child</button>
        <button onClick={() => routeTo('/tester')}>tester</button>
        <button onClick={() => routeTo('/react-micro-app/aa/bb')}>react-micro-app</button>
        <button onClick={() => routeTo('/vue-micro-app/cc/dd')}>vue-micro-app</button>
        <button onClick={() => routeTo('/module-federation/cc/dd')}>module-federation</button>
        <button onClick={() => routeTo('/wrong-app/cc/dd')}>wrong-app</button>
      </div>
      <div>
        [global state] user: {user} / projectID: {projectID} / appID: {appID}
      </div>
      <AppLoader appID={microApp}/>
      <div>
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
}
