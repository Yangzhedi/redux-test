import React from 'react';
import {Link, Route, Redirect, Switch} from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../redux/auth.redux'
import { Layout, Menu, Icon } from 'antd';
import CreateBlog from "./blog/CreateBlog";
import BlogList from "./blog/BlogList";
import Tag from "./tag/Tag";
import styles from "./dashboard.css"

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


@connect(
    state => state.auth,
    { logout }
)
class Dashboard extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        [].includes()
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render(){
        const match = this.props.match;
        const redirectToLogin = <Redirect to='/login' />;
        const app = (
            <div className={styles.componentsLayoutDemoCustomTrigger}>
            <Layout>
                <Sider className={styles.dashboardSider}
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <a href="/"><div className={styles.logo} /></a>

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <SubMenu key="0" title={<span><Icon type="book" /><span> 博客 </span></span>}>
                            <Menu.Item key="11"><Link to={`${match.url}/blog/list`}>博客列表</Link></Menu.Item>
                            <Menu.Item key="12"><Link to={`${match.url}/blog/create`}>写新博客</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">
                            <Icon type="tags" />
                            <span> Tags </span>
                            <Link to={`${match.url}/tag`}/>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                            <Link to={`${match.url}/tag`}>3</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon className={styles.trigger}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Switch>
                            <Route path={`${match.url}/`} exact component={DashboardIndex} />
                            <Route path={`${match.url}/blog/create`} component={CreateBlog} />
                            <Route path={`${match.url}/blog/list`} component={BlogList} />
                            <Route path={`${match.url}/tag`} component={Tag} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
            {/*{ this.props.isAuth? <button onClick={this.props.logout}>注销</button>:null}*/}
            {/*<ul>*/}
                {/*<li>*/}
                    {/*<Link to={`${match.url}/`}>1</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<Link to={`${match.url}/er`}>2</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<Link to={`${match.url}/san`}>3</Link>*/}
                {/*</li>*/}
            {/*</ul>*/}
        </div>);
        return this.props.isAuth ? app: redirectToLogin;
        // return  app;
    }
}
class DashboardIndex extends React.Component {

    render(){
        return(<div>
                123
        </div>);
    }
}
export default Dashboard;