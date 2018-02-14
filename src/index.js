import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// import './index.css';
import App from './App';
import { counter } from "./index.redux";

// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

// applyMiddleware 管理中间件
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

function Er(){
    return <h2>Er</h2>
}
function San(){
    return <h2>San</h2>
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/*<App />*/}
            <div>
                <ul>
                    <li>
                        <Link to='/'>1</Link>
                    </li>
                    <li>
                        <Link to='/er'>2</Link>
                    </li>
                    <li>
                        <Link to='/san'>3</Link>
                    </li>
                </ul>
                <Route path='/' exact component={App}></Route>
                <Route path='/er' component={Er}></Route>
                <Route path='/san' component={San}></Route>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
