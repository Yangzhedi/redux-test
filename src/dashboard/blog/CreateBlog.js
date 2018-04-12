import React from 'react';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import { Input, Row, Col, DatePicker, Checkbox, Button } from 'antd';
import './blog.css'

const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;

const plainOptions = ['Apple', 'Pear', 'Orange','Apple', 'Pear', 'Orange','Apple', 'Pear', 'Orange'];

export default class CreateBlog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            htmlContent: `<h1>Yankees, Peeking at the Red Sox, Will Soon Get an Eyeful</h1>
                <p>Whenever Girardi stole a glance, there was rarely any good news for the Yankees. While Girardi’s charges were clawing their way to a split of their four-game series against the formidable Indians, the Boston Red Sox were plowing past the rebuilding Chicago White Sox, sweeping four games at Fenway Park.</p>`,
            markdownContent: "## HEAD 2 \n markdown examples \n ``` welcome ```",
            responseList: [],
            content:''
        }
    }

    handleChange = (content) => {
        console.log(content)
        this.setState({content})
    }

    handleRawChange = (rawContent) => {
        console.log(rawContent)
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

    onChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    onOk = (value) => {
        console.log('onOk: ', value);
    }

    onCheckboxChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }

    render(){
        const editorProps = {
            height: 500,
            contentFormat: 'html',
            initialContent: '<p>Hello World!</p>',
            onChange: this.handleChange,
            onRawChange: this.handleRawChange
        }
        return (
            <div>
                <h2>我的名字是CreateBlog</h2>
                <Row>
                    <Col span={7}>
                        <p>标题</p>
                        <Input placeholder="标题" />
                    </Col>
                    <Col span={12} offset={5}>
                        <p>时间</p>
                        <DatePicker
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            placeholder="Select Time"
                            onChange={this.onChange}
                            onOk={this.onOk}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={9}>
                        <p>简介</p>
                        <TextArea span={12} rows={4} />
                    </Col>
                    <Col span={11} offset={3}>
                        <p>tags<Button type="primary" shape="circle" icon="plus" size='small' /></p>
                        <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onCheckboxChange} />

                    </Col>
                </Row>


                <BraftEditor {...editorProps}/>
                <div dangerouslySetInnerHTML={{__html: this.state.content}}/>
            </div>
        )
    }
}