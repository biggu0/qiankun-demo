import App from './app.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

export async function bootstrap() {
  console.log("ReactMicroApp bootstraped");
}

export async function mount(props) {
  console.log("ReactMicroApp mount", props);
  ReactDOM.render(<App />, props.container.querySelector('#root'))
}

export async function unmount(props) {
  console.log("ReactMicroApp unmount", props);
  ReactDOM.unmountComponentAtNode(props.container.querySelector('#root'));
}
