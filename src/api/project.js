import { mockResponse } from './index'

export const getProjectList = () => mockResponse([
  {
    name: 'project-1',
    value: 1
  },
  {
    name: 'project-2',
    value: 2
  },
  {
    name: 'project-3',
    value: 3
  },
  {
    name: 'project-4',
    value: 4
  }
])

export const getAppList = () => mockResponse([
  {
    name: 'app-1',
    value: 1
  },
  {
    name: 'app-2',
    value: 2
  },
  {
    name: 'app-3',
    value: 3
  },
  {
    name: 'app-4',
    value: 4
  }
])
