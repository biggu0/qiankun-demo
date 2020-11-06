import Child from '@/page/child'
import Index from '@/page/index'

export default [
  {
    component: Index,
    routes: [
      {
        path: '/child',
        component: Child
      }
    ]
  }
]
