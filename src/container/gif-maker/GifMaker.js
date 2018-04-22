import React from 'react';
import { Input, Button } from 'antd';
import axios from 'axios';
import qs from 'qs';



export default class GifMaker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dataArr : ["我就是饿死","死外边，从这跳下去","也不会吃你们一点东西","真香"]
        }
    }


    handleChange = (key, e) => {
        // console.log(key, e.target.value);
        let arr = this.state.dataArr;
        arr.splice(key,1,e.target.value);

        this.setState({
            dataArr:arr
        })
    }


    createGif = () => {
        axios({
            method: 'post',
            url: '/api/v1/create-gif',
            data: qs.stringify({ dataArr:this.state.dataArr}),
            // transformRequest: [function (data) {
            //     let ret = '';
            //     for (let it in data) {
            //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            //     }
            //     return ret
            // }],
            headers:{'Content-Type': "application/x-www-form-urlencoded"}
        }).then(res => {

            console.log(res)
            // dispatch(loginSuccess({success:'231'}))
        }).catch(() => {

            console.log(123)
        })
    }

    render() {
        console.log(this.state.dataArr);
        return (
            <div className="">
                https://sorry.xuty.tk/wangjingze/
                GifMaker
                第一句话
                <Input placeholder="我就是饿死" onChange={(e) => {this.handleChange(0,e)}}/>
                第二句话
                <Input placeholder="死外边，从这跳下去" onChange={(e) => {this.handleChange(1,e)}}/>
                第三句话
                <Input placeholder="也不会吃你们一点东西" onChange={(e) => {this.handleChange(2,e)}}/>
                第四句话
                <Input placeholder="真香" onChange={(e) => {this.handleChange(3,e)}}/>
                <Button type="primary" onClick={this.createGif}>生成</Button>
            </div>
        );
    }
}