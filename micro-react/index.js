import App from './app.jsx'
import ReactDOM from 'react-dom'
import React from 'react'

export async function bootstrap () {
  console.log('ReactMicroApp bootstraped')
  __webpack_public_path__ = '//localhost:8000/micro-react/dist/' // eslint-disable-line
}

export async function mount (props) {
  console.log('ReactMicroApp mount', props)

  console.log('initial store', props.getGlobalState())

  props.onGlobalStateChange((state, prev) => {
    console.log('received store change: ', state, prev)
  })

  props.setGlobalState({
    name: 'from micro react',
    timestamp: Date.now()
  })

  ReactDOM.render(<App />, props.container.querySelector('#root'))
}

export async function unmount (props) {
  console.log('ReactMicroApp unmount', props)
  ReactDOM.unmountComponentAtNode(props.container.querySelector('#root'))
}
