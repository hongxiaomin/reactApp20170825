import React,{Component} from 'react';
import {connect} from 'react-redux';
import HeaderComponent from "../../components/HeaderComponent/index";
import Info from "./subpage/Info";
import Comment from "./subpage/Comment";
import Buy from "../../components/Buy/index";
import {add,remove} from '../../actions/store';
//通过路由渲染的组件都会在this.props上增加很多属性
class Detail extends Component{
    constructor(){
        super();
        this.state={
            isStore:false
        }
    }
    componentDidMount(){
        let id=this.props.match.params.id;
        let flag=this.props.store.some((item)=>{
           return  item===id
        });
        if(flag){
            this.setState({
                isStore:flag
            })
        }
    }
    buy(){
        let flag=this.checkLogin();
        if(flag){
            this.props.history.push('/user');
        }else{
            this.props.history.push('/login/'+encodeURIComponent(this.props.match.url));
        }
    }
    store(){
        let flag=this.checkLogin();
        let id=this.props.match.params.id;
        if(flag){
            this.setState({
                isStore:!this.state.isStore
            },()=>{
                if(this.state.isStore){
                    this.props.add(id);
                }else{
                    this.props.remove(id);
                }
            })
        }else{
            this.props.history.push('/login/'+encodeURIComponent(this.props.match.url));
        }
    }
    checkLogin(){
        return this.props.userInfo.username?true:false;
    }
    render(){
        return(
            <div>
                <HeaderComponent title="用户详情" history={this.props.history} />
                <Info id={this.props.match.params.id}/>
                <Buy buy={this.buy.bind(this)} store={this.store.bind(this)} isStore={this.state.isStore}/>
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
}
export default connect((state)=>{
    return {
        userInfo:state.userInfo,
        store:state.store
    }
},{
    add:(id)=>(add(id)),
    remove:(id)=>(remove(id))
})(Detail)
