import React from 'react';
import { Table, Divider } from 'antd';
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <Divider type="vertical" />
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
            data: {}
        }
    }

    componentDidMount(){
        // axios.get('/blog1')
        //     .then( res => {
        //         if (res.status === 200) {
        //             // dispatch(userData(res.data));
        //             console.log(res.data)
        //         }
        //     })
    }

    render(){
        return (
            <div>
                <h2>我的名字是BlogList</h2>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}