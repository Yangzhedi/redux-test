import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { addCount, addCountAsync } from '../../index.redux'
import { Pagination } from 'antd';
import style from './blog.css'

@connect(
    state => { return {counter: state.counter}},
    { addCount, addCountAsync }
)
class BlogList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            blogData: [],
            page: 1,
            totalBlogs: 0
        }
    }

    componentWillMount() {
        document.title = '博客列表';
    }

    componentDidMount() {

        axios.post('/api/v1/get-all-blogs', {page: this.state.page, size: 5})
            .then( res => {
                if (res.status === 200) {
                    // dispatch(userData(res.data));
                    this.setState({blogData:res.data})
                    console.log(res.headers["x-total"])
                    this.setState({
                        totalBlogs: parseInt(res.headers["x-total"])
                    })
                }
            })
    }

    handleClick = (blog) => {
        // this.props.history.push(`/blog/${blog.id}`);
        console.log(`/blog/${blog.id}`);
        this.props.history.push({ pathname: `/blog/${blog.id}`, state: blog });
    }

    onPageChange = (page) => {
        this.setState({ page })
        console.log(this.state.page);
        axios.post('/api/v1/get-all-blogs', {page: page, size: 5})
            .then( res => {
                if (res.status === 200) {
                    // dispatch(userData(res.data));
                    this.setState({blogData:res.data})
                    console.log(res.headers["x-total"])
                    this.setState({
                        totalBlogs: parseInt(res.headers["x-total"])
                    })
                }
            })
    }

    render() {
        // console.log(this.state.page);
        return (
            <div className="">
                {/*BlogList*/}
                {/*<button onClick={() => {this.props.addCount( '{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}')}}>add </button>*/}
                {/*<button onClick={() => {this.props.addCountAsync('{"count":321}')}}>addCountAsync </button>*/}
                <div className={style.blogList}>
                {
                    this.state.blogData.map((item, index) => {
                        return (<div key={index} className={style.blogItem}>
                            <h3 onClick={() => {this.handleClick(item)}}>{item.title}</h3>
                            <div dangerouslySetInnerHTML={{__html: item.description}}/>
                            {/*<div dangerouslySetInnerHTML={{__html: item.content}}/>*/}
                            </div>)
                    })
                }
                </div>
                <div className={style.blogPagination}>
                    <Pagination pageSize={5} total={this.state.totalBlogs} current={this.state.page} defaultCurrent={1}
                                onChange={this.onPageChange}/>
                </div>
            </div>
        );
    }
}
// const mapStatetoProps = state => {
//     return {counter : state.counter}
// };
// const actionCreator = { addCountAsync, addCount };
// // 装饰器的写法
// BlogList = connect(mapStatetoProps, actionCreator)(BlogList);

export default withRouter(BlogList);