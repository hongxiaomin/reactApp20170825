import React,{Component} from 'react';
import CommentItem from "../CommentItem/index";
import './index.less';
export default class CommentComponent extends Component{
    render(){
        return(
            <div className="comment-component">
                <h3>用户点评</h3>
                <ul>
                    {
                        this.props.data.map((item,index)=>(
                            <CommentItem key={index} data={item}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}