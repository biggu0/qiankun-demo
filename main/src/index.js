import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import qiankunStarter from './qiankun-starter'
import { mainAppID } from './util/constant'

qiankunStarter()

ReactDOM.render(<App/>, document.querySelector(`#${mainAppID}`))
