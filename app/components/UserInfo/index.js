import React,{Component} from 'react';
import './index.less';
export default class UserInfo extends Component{
    render(){
        let{cityName,username}=this.props.userInfo;
        return(
            <div className="user-info">
                <span>
                    <i className="iconfont icon-coordinates_fill"></i>
                    {cityName}
                </span>
                <span>
                    {username}
                </span>

            </div>
        )
    }
}