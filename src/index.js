import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
//import {myAction} from './redux/actions';
import 'modern-normalize/modern-normalize.css';

console.log(store);
console.log(store.getState);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
