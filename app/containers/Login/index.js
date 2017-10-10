import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';
import LoginComponent from "../../components/LoginComponent/index";
class Login extends Component{
    constructor(){
        super();
        this.state={login:false};//默认不显示登陆，写一个方法校验是否登录过
    }
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin(){//检查是否登陆，在redux 中 state.userInfo 是否有username,如果有则登陆过
        if(this.props.userInfo.username){
            return this.props.history.push('/user');
        }
        this.setState({login:true});//显示登陆组件
    }
    login(username){
       let info=this.props.userInfo;
       info["username"]=username;
       this.props.userAction(info);
       if(this.props.match.params.route){
           this.props.history.push(decodeURIComponent(this.props.match.params.route));
       }else{
           this.props.history.push('/user');
       }
    }
    render(){
        return(
            <div>
                <HeaderComponent title="登陆" history={this.props.history}/>
                {/*如果登陆过 显示登陆组件，否则不显示直接跳转用户界面*/}
                {
                    this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div>退出登录</div>
                }
            </div>
        )
    }
}
let fromStateToProps=(state)=>{
  return {
      userInfo:state.userInfo
  }
};
let fromDispatchToProps={
    userAction:(data)=>(Actions.update(data))
};

export default connect(fromStateToProps,fromDispatchToProps)(Login)
