import React,{Component} from 'react';
import './index.less';
export default class HeaderComponent extends Component{
    back(){
        if(this.props.back){
            this.props.history.push(this.props.back)
        }else{
            this.props.history.go(-1)
        }
    }
    render(){
        return(
            <div className="back header-component">
                <i className="iconfont icon-return" onClick={this.back.bind(this)}></i>
                <span>{this.props.title}</span>
            </div>
        )
    }
}