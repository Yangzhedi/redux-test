import React from 'react';
import axios from 'axios';
import { Table, Divider } from 'antd';
const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
}, {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    render: text => <a href="javascript:;">{text}</a>,
},{
    title: '简介',
    dataIndex: 'description',
    key: 'description',
}, {
    title: '修改时间',
    dataIndex: 'modify_time',
    key: 'modify_time',
},{
    title: '浏览数',
    dataIndex: 'views',
    key: 'views',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
          <a href="javascript:;">修改</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
          {/*<Divider type="vertical" />*/}
        </span>
        ),
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];

export default class BlogList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            blogData: []
        }
    }

    componentDidMount(){
        axios.post('/api/v1/get-all-blogs', {page: 1, size: 5})
            .then( res => {
                if (res.status === 200) {
                    // dispatch(userData(res.data));
                    this.setState({blogData:res.data})
                    console.log(res.data)
                }
            })
    }

    render(){
        console.log(this.state.blogData[0]);
        return (
            <div>
                <h2>我的名字是BlogList</h2>
                <Table columns={columns} dataSource={this.state.blogData} />
            </div>
        )
    }
}