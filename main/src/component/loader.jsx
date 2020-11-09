import React from 'react'
import ReactDOM from 'react-dom'
import { microAppModuleRootID } from '@/util/constant'

export default function Loader (props) {
  const { loading } = props
  if (!loading) return <div id={microAppModuleRootID}></div>

  return (
    <div>
      loading...
    </div>
  )
}

export const renderLoader = (props) => {
  const { container, loading } = props
  ReactDOM.render(<Loader loading={loading}/>, container)
}
