import React from 'react';
import axios from 'axios';
import { Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import style from '../App.css'
import { login } from '../redux/auth.redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

@connect(
    state => state.auth,
    {login}
)
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password:''
        };
        this.handleLogin = this.handleLogin.bind(this)
    }

    componentDidMount(){
        // this.props.login()
        // axios.get('/blog1')
        //     .then( res => {
        //         if (res.status === 200) {
        //             // dispatch(userData(res.data));
        //             console.log(res.data)
        //         }
        //     })
    }


    handleLogin = (e) => {
        e.preventDefault();
        this.props.login({user:this.state.user,password:this.state.password})
    }

    handleChange = (key, e) => {
        this.setState({
            [key]: e.target.value
        })
        console.log(e.target.value)
    }

    getTags = () => {
        axios.post('/api/v1/get-all-tags')
            .then(res => {
                // if (res.status === 200 && res.data.code === 0){
                //     dispatch(loginSuccess(res.data.data))
                // } else {
                //     dispatch(errMsg(res.data.msg))
                // }
                console.log(res)
            })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={style.loginContainer}>
                {this.props.redirectTo ? <Redirect to='/dashboard' /> : null}
                <div style={{width:400, margin:'0 auto'}} className={style.loginDiv}>
                    <h2>后台管理登录</h2>
                    <Form onSubmit={this.handleLogin} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" onChange={v => this.handleChange('user',v)}/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={v => this.handleChange('password',v)}/>
                            )}
                        </FormItem>
                        <FormItem>
                            {/*{getFieldDecorator('remember', {*/}
                                {/*valuePropName: 'checked',*/}
                                {/*initialValue: true,*/}
                            {/*})(*/}
                                {/*<Checkbox>Remember me</Checkbox>*/}
                            {/*)}*/}
                            {/*<a className="login-form-forgot" href="">Forgot password</a>*/}
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            {/*Or <a href="">register now!</a>*/}
                        </FormItem>
                    </Form>
                </div>

            </div>

        )
    }

}
export default Form.create()(Login);