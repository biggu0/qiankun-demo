import React from 'react'
import ReactDOM from 'react-dom'
import { microAppWrapperID } from '@/util/constant'

export default function Loader (props) {
  const { loading } = props
  if (!loading) return <div id={microAppWrapperID}></div>

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
