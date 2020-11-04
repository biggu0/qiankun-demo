import App from './app.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

export async function bootstrap() {
  console.log("ReactMicroApp bootstraped");
}

export async function mount(props) {
  console.log("ReactMicroApp mount", props);

  console.log('initial store', props.getGlobalState());

  props.onGlobalStateChange((state, prev) => {
    console.log('received store change: ', state, prev);
  });

  props.setGlobalState({
    name: 'from micro react',
  });

  ReactDOM.render(<App />, props.container.querySelector('#root'))
}

export async function unmount(props) {
  console.log("ReactMicroApp unmount", props);
  ReactDOM.unmountComponentAtNode(props.container.querySelector('#root'));
}
