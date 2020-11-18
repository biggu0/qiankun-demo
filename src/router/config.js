import Child from '@/page/child';
import Index from '@/page/index';
import Tester from '@/page/micro-app-tester';

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
      {
        path: '/tester',
        component: Tester,
      },
    ],
  },
];
