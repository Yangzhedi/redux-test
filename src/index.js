import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import './index.css';
import App from './App';
import { counter, addCount, subCount, addCountAsync } from "./index.redux";

// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

// applyMiddleware 管理中间件
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

function render() {
    ReactDOM.render(<App  store={store} addCount={addCount} addCountAsync={addCountAsync} subCount={subCount}/>, document.getElementById('root'));
}

render();

store.subscribe(render);