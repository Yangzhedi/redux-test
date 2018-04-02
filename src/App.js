import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCountAsync,subCount, addCount } from "./index.redux";
import logo from './logo.svg';
import './App.css';
import { Icon } from 'antd'

// const mapStatetoProps = state => {
//     return {num:state}
// };
// const actionCreator = { addCountAsync,subCount, addCount };
// 装饰器的写法
// App = connect(mapStatetoProps, actionCreator)(App);


@connect(
    // 你要state的什么属性，放在props里
    state => ({num:state.counter}),
    // 你要什么方法，放在props里，自动dispatch
    { addCountAsync,subCount, addCount }
)
class App extends Component {

    componentWillMount(){
        document.title = '杨哲迪的个人网站 - Yang Zhedi\'s Personal Website';
    }
    render() {
        const num = this.props.num;
        const addCount = this.props.addCount;
        const subCount = this.props.subCount;
        const addCountAsync = this.props.addCountAsync;
        return (
            <div className="container">
                this website is made by Django 2.0 and React 16
                <img src={logo} className="App-logo" alt="logo" />
                <p>博客</p>
                <p>数据</p>
                <p>留言发送到<a href="Mailto:uiryzd@163.com">uiryzd@163.com</a></p>
                <a href="https://www.zhihu.com/people/yang-xiao-shi-er" target="_blank">
                    <Icon type="zhihu" style={{ fontSize: 20, color: '#0084ff' }}/>
                </a>
                <a href="https://weibo.com/2623520145/profile" target="_blank">
                    <Icon type="weibo" style={{ fontSize: 20, color: '#e6162d' }}/>
                </a>
                <a href="https://github.com/Yangzhedi" target="_blank">
                    <Icon type="github" style={{ fontSize: 20, color: '#24292e' }}/>
                </a>

            </div>
        );
    }
}

export default App;
