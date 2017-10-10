import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less';
import SearchInput from "../SearchInput/index";
//主页头部组件
export default class HomeHeader extends Component{
    toSearch(value){
        this.props.history.push('/search/all/'+value);
    }
    render(){
        return(
            <div className="home-header back">
                <div className="city">
                    <Link to='/city'>
                        {this.props.cityName}
                        <i className="iconfont icon-unfold"></i>
                    </Link>
                </div>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <SearchInput value="" toSearch={this.toSearch.bind(this)}/>
                </div>
                <div className="profile">
                    <Link to='/login'>
                        <i className="iconfont icon-accountfilling"></i>
                    </Link>
                </div>
            </div>
        )
    }
}