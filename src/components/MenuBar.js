import React from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom'


class MenuBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'home',
        }
    }

    componentWillMount(){
        let state = this.props.history.location.pathname.split('/')[1];
        this.setState({
            current: state || 'home'
        });
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        this.props.history.push('/'+ (e.key === 'home' ? '': e.key));
    };

    render() {
        return (
            <Menu onClick={this.handleClick}  className="menubar"
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <Icon type="home" /> 主页
                </Menu.Item>
                <Menu.Item key="blog">
                    <Icon type="book" /> 博客
                </Menu.Item>
                <Menu.Item key="stock">
                   <Icon type="file-excel" /> 数据
                </Menu.Item>
                <Menu.Item key="about">
                   <Icon type="solution" /> 关于
                </Menu.Item>
                <Menu.Item key="zip" disabled>
                    <Icon type="picture" /> 图片压缩
                </Menu.Item>
            </Menu>
        );
    }
}
export default withRouter(MenuBar);