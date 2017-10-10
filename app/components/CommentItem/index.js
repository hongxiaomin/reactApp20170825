import React,{Component} from 'react';
import Star from "../Star/index";
import './index.less'
export default class CommentItem extends Component{
    render(){
        let {username,comment,star}=this.props.data;
        return(
            <li className="comment-item">
                <p>
                    <i className="iconfont icon-accountfilling"></i>
                    {username}
                </p>
                <Star count={star}/>
                <p>
                    {comment}
                </p>
            </li>
        )
    }
}