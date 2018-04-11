import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch, Miss } from 'react-router-dom'

import './index.css';
// import { counter } from "./index.redux";
import reducers from './reducer'
import App from './App'
import MenuBar from './components/MenuBar'
import About from './container/about/About'
import Dashboard from './container/dashboard/Dashboard'

import './config'
import gif from './imgs/404.gif'
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

import Bundle from './Bundle'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

// applyMiddleware 管理中间件
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

function Stock (){
    return (
        <div>
            <h2>Stock</h2>
        </div>
    );
}

const CodeGuide = (props) => (
    <Bundle load={() => import('./container/code-guide/CodeGuide')}>
        {(CodeGuide) => <CodeGuide {...props}/>}
    </Bundle>
);

const BlogList = (props) => (
    <Bundle load={() => import('./container/blog/BlogList')}>
        {(BlogList) => <BlogList {...props}/>}
    </Bundle>
);

const NoMatch = ({ location }) => (
    <div className="container">
        <p>Nothing matched {location.pathname}.</p>
        <img src={gif} alt="404的图片404了"/>
    </div>
)


ReactDOM.render(
    <Provider store={store}>
        <Router>
            {/*<App />*/}
            <div>
                <MenuBar/>
                <div className="container">
                    <Switch>
                        {/*只渲染命中的第一个Route*/}
                        <Route path='/' exact component={App} />
                        <Route path='/blog' component={BlogList} />
                        <Route path='/stock' component={Stock} />
                        <Route path='/about' component={About} />
                        <Route path='/code-guide' component={CodeGuide} />
                        {/*<Route path='/dashboard' component={Dashboard} />*/}
                        {/*<Miss component={NoMatch}/>*/}
                        {/*<Redirect to='/' />*/}
                        {/*<Route path='/404' component={NoMatch} />*/}
                        {/*<Redirect from='*' to='/404' />*/}
                    </Switch>
                </div>
                <Switch>
                    <Route path='/dashboard' component={Dashboard} />

                    <Route path="*" component={NoMatch}/>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
