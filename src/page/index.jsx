import React, { useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useUser, useProjectID, useAppID } from '@/component/use/global';
import { getUserInfo } from '@/api/user';

export default function Index({ route, match }) {
  const { projectID: mProjectID, appID: mAppID } = match.params;

  const [page, setPage] = useState(window.location.pathname);
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
    setPage(url);
    window.history.pushState({}, '', url);
  };

  return (
    <div>
      <div>
        <button onClick={() => routeTo('/')}>main</button>
        <button onClick={() => routeTo('/child')}>child</button>
        <button onClick={() => routeTo('/react-micro-app/aa/bb')}>react-micro-app</button>
        <button onClick={() => routeTo('/vue-micro-app/cc/dd')}>vue-micro-app</button>
      </div>
      <div>
        url: {page}
      </div>
      <div>
        user: {user}
      </div>
      <div>
        projectID: {projectID} / appID: {appID}
      </div>
      <div>
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
}
