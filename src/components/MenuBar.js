import React from 'react';
import { Menu, Icon } from 'antd';
import { HashRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class MenuBar extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail">

                    <Link to='/admin'><Icon type="mail" />Navigation One</Link>

                </Menu.Item>
                <Menu.Item key="app">
                    <Link to='/dashboard'><Icon type="mail" />Navigation two</Link>
                </Menu.Item>

                <Menu.Item key="setting" disabled>
                    <Icon type="appstore" />Navigation Three
                </Menu.Item>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                </Menu.Item>
            </Menu>
        );
    }
}