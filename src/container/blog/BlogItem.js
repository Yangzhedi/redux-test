import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { message, Breadcrumb } from 'antd';
import { addCount, addCountAsync } from '../../index.redux'
import style from './blog.css'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

@connect(
    state => { return {counter: state.counter}},
    { addCount, addCountAsync }
)
class BlogItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            blog: {}
        }

    }

    componentWillMount() {
        document.title = '博客列表';
    }

    componentDidMount() {
        const blogId = this.props.location.pathname.split('/')[2]
        console.log(this.props.location)
        if (this.props.location.state) {
            this.setState({blog: this.props.location.state})
        } else {
            console.log(this.props.location.pathname.split('/')[2])
            axios.post('/api/v1/get-blog', {id: blogId})
                .then( res => {
                    console.log(res)
                    if (res.status === 200 && res.data.message !== 'no blog') {
                        // dispatch(userData(res.data));
                        this.setState({blog:res.data});
                        console.log(res.data)
                    } else {
                        message.destroy();
                        // let count = 3;
                        // let timer = setInterval(()=>{
                        //     count--;
                        //     console.log(count)
                        //     console.log(`请输入正确的blogid,${count}秒后返回博客列表`)
                        // }, 1000)
                        message.error(`请输入正确的blogid,3秒后返回博客列表`, 3, ()=>{
                            // clearInterval(timer);
                            this.props.history.push('/blog');
                        });

                    }
                })
        }
        // 如果没有参数传递就获取

    }

    render() {
        // console.log(this.state.blog);
        return (
            <div className={style.container}>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to='/blog'>博客列表</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.blog.title}</Breadcrumb.Item>
                </Breadcrumb>
                <h1>{this.state.blog.title}</h1>
                <div className={style.articleSub}>
                    <span className={style.classification}>{this.state.blog.classification}</span>
                    <span>{this.state.blog.create_time}</span>
                </div>
                <div className={style.content}
                     dangerouslySetInnerHTML={{__html: this.state.blog.content}}/>
            </div>
        );
    }
}
export default withRouter(BlogItem);
// const mapStatetoProps = state => {
//     return {counter : state.counter}
// };
// const actionCreator = { addCountAsync, addCount };
// // 装饰器的写法
// BlogList = connect(mapStatetoProps, actionCreator)(BlogList);

