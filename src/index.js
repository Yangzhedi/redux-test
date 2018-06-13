import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch, Miss } from 'react-router-dom'
import Loadable from 'react-loadable';
import Loading from './config/Loading';

import styles from './index.css';
// import { counter } from "./index.redux";
import reducers from './reducer'
import App from './App'
import MenuBar from './components/MenuBar'
import About from './container/about/About'
import BlogItem from './container/blog/BlogItem'
import Dashboard from './dashboard/Dashboard'
import Login from './dashboard/Login'
import CodeGuide from './container/code-guide/CodeGuide'

import './config'
import gif from './imgs/404.gif'
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

import Bundle from './config/Bundle'
import loggerMiddleware from './config/logger-middleware'
import parseMiddleware from './config/parse-middleware'
import GifMaker from "./container/gif-maker/GifMaker";

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

// applyMiddleware 管理中间件
const store = createStore(reducers, compose(
    applyMiddleware(loggerMiddleware),
    // applyMiddleware(parseMiddleware),
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


const BlogList = (props) => (
    <Bundle load={() => {
        return import('./container/blog/BlogList')
    }}>
        {(BlogList) => <BlogList {...props}/>}
    </Bundle>
);




// const BlogList = Loadable({
//     loader: () => import('./container/blog/BlogList'),
//     loading: Loading,
//     timeout:1000
// });
//
//
// const CodeGuide = Loadable({
//     loader: () => import('./container/code-guide/CodeGuide'),
//     loading: Loading,
// });


const NoMatch = ({ location }) => (
    <div className={styles.container}>
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
                <div className={styles.container}>
                    <Switch>
                        {/*只渲染命中的第一个Route*/}
                        <Route path='/' exact component={App} />
                        <Route path='/blog' exact component={BlogList} />
                        <Route path="/blog/:blogid" component={BlogItem} />
                        <Route path='/stock' component={Stock} />
                        <Route path='/about' component={About} />
                        <Route path='/code-guide' component={CodeGuide} />
                        <Route path='/gif-maker' component={GifMaker} />
                        {/*<Route path='/dashboard' component={Dashboard} />*/}
                        {/*<Miss component={NoMatch}/>*/}
                        {/*<Redirect to='/' />*/}
                        {/*<Route path='/404' component={NoMatch} />*/}
                        {/*<Redirect from='*' to='/404' />*/}
                    </Switch>
                </div>
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
