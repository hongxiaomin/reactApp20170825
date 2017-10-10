import React,{Component} from 'react';
import {connect} from  'react-redux'
//绑定actionCreater组成的对象
import {bindActionCreators} from 'redux'
import MapRouter from "../routers/index";
import * as Actions from '../actions/userInfo';
import {getStorage} from "../local/index";
class App extends Component{
    constructor(){
        super();
        this.state={done:false}
    }
    componentDidMount(){
        //现在本地查找 是否存储过localstorage名字叫cityName的
        //1 没有cityName，赋予一个默认值 杭州
        //2 将当前的城市从存放到redux
        this.setState({
            done:true
        });
        let city=getStorage('cityName');
        if(!city){
            city='杭州';
        }
        this.props.userActions({cityName:city});
    }
    render(){
        return(
            <div>
                {
                    this.state.done? <MapRouter/>:<div>正在加载...</div>
                }
            </div>
        )
    }
};
let fromStateToProps =(state)=>({});
let fromDispatchToProps={
  userActions:(data)=>(Actions.update(data))
};

export default connect(fromStateToProps,fromDispatchToProps)(App)