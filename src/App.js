import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCountAsync,subCount, addCount } from "./index.redux";
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile'


class App extends Component {
    render() {
        const num = this.props.num;
        const addCount = this.props.addCount;
        const subCount = this.props.subCount;
        const addCountAsync = this.props.addCountAsync;
        return (
            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">现在有数字{num}</h1>
                </header>
                <Button type='primary' onClick={addCount}> 加 </Button>
                <Button type='primary' onClick={subCount}> - </Button>
                <Button type='primary' onClick={addCountAsync}> 拖两天 </Button>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {num:state}
};
const actionCreator = { addCountAsync,subCount, addCount };
// 装饰器的写法
App = connect(mapStatetoProps, actionCreator)(App);

export default App;
