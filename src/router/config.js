import Child from '@/page/child';
import Index from '@/page/index';

export default [
  {
    path: '/:microApp/:projectID/:appID',
    component: Index,
  },
  {
    path: '/',
    component: Index,
    routes: [
      {
        path: '/child',
        component: Child,
      },
    ],
  },
];
