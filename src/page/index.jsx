import React, { useState, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { useUser } from '@/component/use/global';
import { getUserInfo } from '@/api/user';

export default function Index({ route }) {
  const [page, setPage] = useState(window.location.pathname);
  const [user, setUser] = useUser();

  useEffect(() => {
    getUserInfo().then((res) => {
      setUser(res.name);
    });
  }, []);

  const routeTo = (url) => {
    setPage(url);
    window.history.pushState({}, '', url);
  };

  return (
    <div>
      <div>
        <button onClick={() => routeTo('/')}>main</button>
        <button onClick={() => routeTo('/child')}>child</button>
        <button onClick={() => routeTo('/react-micro-app')}>react-micro-app</button>
        <button onClick={() => routeTo('/vue-micro-app')}>vue-micro-app</button>
      </div>
      <div>
        url: {page}
      </div>
      <div>
        user: {user}
      </div>
      <div>
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
}
