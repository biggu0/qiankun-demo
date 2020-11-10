import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { startQiankun } from './qiankun/starter';
import { mainAppID } from './util/constant';

ReactDOM.render(<App/>, document.querySelector(`#${mainAppID}`));

startQiankun();
