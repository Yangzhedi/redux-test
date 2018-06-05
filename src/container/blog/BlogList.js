import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { addCount, addCountAsync } from '../../index.redux'


@connect(
    state => { return {counter: state.counter}},
    { addCount, addCountAsync }
)
class BlogList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            blogData: []
        }

    }

    componentWillMount() {
        document.title = '博客列表';
    }

    componentDidMount() {

        axios.post('/api/v1/get-all-blogs', {page: 1, size: 5})
            .then( res => {
                if (res.status === 200) {
                    // dispatch(userData(res.data));
                    this.setState({blogData:res.data})
                    console.log(res.data)
                }
            })
    }

    handleClick = (blog) => {
        // this.props.history.push(`/blog/${blog.id}`);
        console.log(`/blog/${blog.id}`);
        this.props.history.push({ pathname: `/blog/${blog.id}`, state: blog });
    }

    render() {
        console.log(this.props.counter);
        return (
            <div className="">
                BlogList
                <button onClick={() => {this.props.addCount( '{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}')}}>add </button>
                <button onClick={() => {this.props.addCountAsync('{"count":321}')}}>addCountAsync </button>
                {
                    this.state.blogData.map((item, index) => {
                        return (<div key={index}>
                            <h3 onClick={() => {this.handleClick(item)}}>{item.title}</h3>
                            <div dangerouslySetInnerHTML={{__html: item.description}}/>
                            {/*<div dangerouslySetInnerHTML={{__html: item.content}}/>*/}
                            </div>)
                    })
                }
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