import ReactDOM from 'react-dom'
import React from 'react'
import App from './app.jsx'

export async function bootstrap () {
  __webpack_public_path__ = '//localhost:8000/react17/dist/' // eslint-disable-line
}

export async function mount (props) {
  console.log('initial store', props.getGlobalState())

  props.onGlobalStateChange((state, prev) => {
    console.log('received store change: ', state, prev)
  })

  props.setGlobalState({
    user: 'from micro react'
  })

  ReactDOM.render(<App />, props.container.querySelector(`#${props.rootID}`))
}

export async function unmount (props) {
  ReactDOM.unmountComponentAtNode(props.container.querySelector(`#${props.rootID}`))
}
