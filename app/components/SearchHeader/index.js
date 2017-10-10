import React,{Component} from 'react';
import SearchInput from "../SearchInput/index";
import './index.less'
export default class SearchHeader extends Component{
    back(){
        if(this.props.back){
            this.props.history.push(this.props.back)
        }else{
            this.props.history.go(-1)
        }
    }
    render(){
        console.log(this.props.value)
        return(
            <div className="search-header">
                <i className="iconfont icon-return return-back" onClick={this.back.bind(this)}></i>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <SearchInput value={this.props.value} toSearch={this.props.toSearch}/>
                </div>
            </div>
        )
    }
}