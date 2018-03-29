import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'

// import './index.css';
// import { counter } from "./index.redux";
import reducers from './reducer'
import Auth from './Auth'
import MenuBar from './components/MenuBar'
// import Dashboard from './Dashboard'
import './config'
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

import Bundle from './Bundle'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

// applyMiddleware 管理中间件
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
));
// class Test extends React.Component{
//     render(){
//         console.log(this.props);
//         return <h2>测试  {this.props.match.params.location}</h2>
//     }
// }

function Auth2 (){
    return (
        <div>
            <h2>测试Auth2</h2>
            <Link to='/dashboard'>dashboard</Link>
            <Link to='/admin'>admin</Link>
        </div>
    );
}

const Dashboard = (props) => (
    <Bundle load={() => import('./Dashboard')}>
        {(Dashboard) => <Dashboard {...props}/>}
    </Bundle>
);

const Admin = (props) => (
    <Bundle load={() => import('./Admin')}>
        {(Admin) => <Admin {...props}/>}
    </Bundle>
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {/*<App />*/}
            <div>
                <MenuBar/>
                <Switch>
                    {/*只渲染命中的第一个Route*/}
                    <Route path='/' exact component={Auth2} />
                    <Route path='/login' component={Auth} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/admin' component={Admin} />
                    <Redirect to='/dashboard' />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
