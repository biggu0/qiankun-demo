import App from './app.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

export async function bootstrap() {
}

export async function mount(props) {
  ReactDOM.render(<App />, props.container.querySelector(`#${props.rootID}`));
}

export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(props.container.querySelector(`#${props.rootID}`));
}
