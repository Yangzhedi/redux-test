import React from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import styles from './MenuBar.css'

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
        // console.log(this.props.history.location.pathname.indexOf('/dashboard'));
        // console.log(this.props.history.location.pathname);
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
        this.props.history.push('/'+ (e.key === 'home' ? '': e.key));
    };

    render() {
        let idx = this.props.history.location.pathname.indexOf('/dashboard');
        let idx2 = this.props.history.location.pathname.indexOf('/login');
        let menu = <div className={styles.menubarContainer}>
            <a onClick={() => { this.props.history.push('/');this.setState({current: 'home'}) }}>杨哲迪的个人网站</a>
            <Menu onClick={this.handleClick}
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
                <Menu.Item key="code-guide">
                    <Icon type="code-o" /> 规范
                </Menu.Item>
                <Menu.Item key="gif-maker" disabled>
                    <Icon type="picture" /> 生成表情包
                </Menu.Item>
                {/*<Menu.Item key="zip" disabled>*/}
                    {/*<Icon type="picture" /> 图片压缩*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item key="dashboard">*/}
                    {/*<Icon type="picture" /> Dashboard*/}
                {/*</Menu.Item>*/}
            </Menu>
        </div>;
        return (
            (idx === -1 && idx2 === -1) ? menu : null
        );
    }
}
export default withRouter(MenuBar);