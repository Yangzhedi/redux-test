import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'antd-mobile'


class App extends Component {
    render() {
        const store = this.props.store;
        const addCount = this.props.addCount;
        const subCount = this.props.subCount;
        const addCountAsync = this.props.addCountAsync;
        const num = store.getState();
        return (
            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">现在有数字{num}</h1>
                </header>
                <Button type='primary' onClick={ () => {store.dispatch(addCount())}}> 加 </Button>
                <Button type='primary' onClick={ () => {store.dispatch(subCount())}}> - </Button>
                <Button type='primary' onClick={ () => {store.dispatch(addCountAsync())}}> 拖两天 </Button>
            </div>
        );
    }
}

export default App;
