import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { addCount, addCountAsync } from '../../index.redux'


@connect(
    state => { return {counter: state.counter}},
    { addCount, addCountAsync }
)
export default class BlogItem extends React.Component {
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
        console.log(this.props.location)
        if (this.props.location.state) {
            this.setState({blog: this.props.location.state})
        } else {
            console.log(this.props.location.pathname.split('/')[2])
        }
        // 如果没有参数传递就获取
        // axios.post('/api/v1/get-blog', {id: 1})
        //     .then( res => {
        //         if (res.status === 200) {
        //             // dispatch(userData(res.data));
        //             this.setState({blogData:res.data})
        //             console.log(res.data)
        //         }
        //     })
    }

    render() {
        return (
            <div className="">
                BlogList
                <div dangerouslySetInnerHTML={{__html: this.state.blog.content}}/>
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

