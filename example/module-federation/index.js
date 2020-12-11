import ReactDOM from 'react-dom'
import React from 'react'
import App from './app.jsx'

window.React = React
window.ReactDOM = ReactDOM

const render = (container) => {
  ReactDOM.render(<App />, container.querySelector('#mf-app'))
}

export async function bootstrap () {
}

export async function mount (props) {
  render(props.container)
}

export async function unmount (props) {
  ReactDOM.unmountComponentAtNode(props.container.querySelector('#mf-app'))
}

if (!window.__POWERED_BY_QIANKUN__) { // eslint-disable-line
  render(document.body)
}
