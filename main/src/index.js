import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import qiankunStarter from './qiankun-starter'

qiankunStarter()

ReactDOM.render(<App/>, document.querySelector('#main-app'))
