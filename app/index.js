import React from 'react';
import {render} from 'react-dom';
import {Provider} from  'react-redux';
import App from "./containers/index";
import './assets/index.less';
import {configureStore} from './store';
//可以在configureStore传入初始化参数
let store=configureStore();
render(<Provider store={store}><App/></Provider>,document.querySelector('#root'));