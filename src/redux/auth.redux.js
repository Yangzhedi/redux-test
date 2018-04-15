import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MESSAGE = 'ERROR_MESSAGE';
const LOAD_DATA = 'LOAD_DATA';
const LOG_OUT = 'LOG_OUT';
const initState = {
    isAuth: false,
    redirectTo:'',
    msg: '',
    user: '',
    type: '',
};
// reducer
export function auth(state=initState, action) {
    switch (action.type){
        case LOGIN_SUCCESS:
            return {...state, msg:'login_success',isAuth:true,redirectTo:'/dashboard',...action.payload};
        case REGISTER_SUCCESS:
            return {...state, msg:'',isAuth:true,...action.payload};
        case LOAD_DATA:
            return {...state,isAuth:true,...action.payload};
        case ERROR_MESSAGE:
            return {...state, msg:action.msg,isAuth:false};
        case LOG_OUT:
            return {...state, isAuth:false};
        default:
            return state
    }
}

// action creator
function loginSuccess(data) {
    console.log(data)
    return {type:LOGIN_SUCCESS, payload:data}
}
function registerSuccess(data) {
    return {type:REGISTER_SUCCESS, payload:data}
}
function errMsg(msg) {
    message.warning(msg, 1);
    return {type:ERROR_MESSAGE, msg}
}

export function loadData(userinfo) {
    return {type:LOAD_DATA, payload: userinfo}
}

export function logout() {
    return { type:LOG_OUT }
}

export function login({user, password}) {
    if (!user || !password) return errMsg('用户名密码必须输入');
    return dispatch => {
        // axios.post('/api/v1/login', {user, password})
        //     .then(res => {
        //         // if (res.status === 200 && res.data.code === 0){
        //         //     dispatch(loginSuccess(res.data.data))
        //         // } else {
        //         //     dispatch(errMsg(res.data.msg))
        //         // }
        //         dispatch(loginSuccess({success:'231'}))
        //     })

        axios({
            method: 'post',
            url: '/api/v1/login',
            data: qs.stringify({user, password}),
            // transformRequest: [function (data) {
            //     let ret = '';
            //     for (let it in data) {
            //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            //     }
            //     return ret
            // }],
            headers:{'Content-Type': "application/x-www-form-urlencoded"}
        }).then(res => {
            if (res.status === 200 && res.data.id){
                dispatch(loginSuccess(res.data.data))
            } else {
                dispatch(errMsg(res.data))
            }
            console.log(res)
            // dispatch(loginSuccess({success:'231'}))
        }).catch(() => {
            message.destroy();
            errMsg('没有用户')
            console.log(123)
        })

    }
    // return dispatch => {
    //     dispatch(loginSuccess({success:'231'}))
    // }
}

// export function login() {
//     return {type: LOGIN_SUCCESS}
// }