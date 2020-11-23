import React from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@/router/config';
import history from '@/util/history';

export default function App() {
  return (
    <Router history={history}>
      {renderRoutes(routes)}
    </Router>
  );
}
