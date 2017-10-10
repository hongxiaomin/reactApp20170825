import React,{Component} from 'react';
import './index.less';
export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            val:'',
        }
    }
    login(){
        if(this.state.val){
            this.props.login(this.state.val);
        }
    }
    changeValue(event){
        this.setState({
            val:event.target.value
        })
    };
    render(){
        return(
            <div className="login-component">
                <p>
                    <i className="iconfont icon-accountfilling"></i>
                    <input type="text" name="username" value={this.state.val} onChange={this.changeValue.bind(this)} placeholder="请输入用户名"/>
                </p>
                <p>
                    <i className="iconfont icon-lock_fill"></i>
                    <input type="password" name="password" placeholder="请输入用户密码"/>
                </p>
                <p>
                    <button className="back" onClick={this.login.bind(this)}>登陆</button>
                </p>
            </div>
        )
    }
}