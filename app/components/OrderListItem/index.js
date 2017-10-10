import React,{Component} from 'react';
import './index.less';
export default class OrderListItem extends Component{
    constructor(props){
        super(props);
        this.state={
            commentState:props.data.commentState
        }
    }
    changeCommentState(){
        this.setState({
            commentState:1
        })
    }
    cancel(){
        this.setState({
            commentState:0
        })
    };
    sure(){
        this.props.commitComment(this.props.data.id,this.comment.value,()=>{
            this.setState({
                commentState:2
            })
        });
    };
    render(){
        let{id,img,title,count,price}=this.props.data;
        return(
            <div>
                <div className="order-list-item">
                    <img src={img} alt=""/>
                    <div className="order-list-content">
                        <h3>商户：{title}</h3>

                        <p>数量：{count}</p>
                        <p>价格：￥{price}</p>

                    </div>
                    <div className="comment-btn">
                        {/*commentState 三个状态 0表示未评价 1表示正在评价 2表示评价完成*/}
                        {
                            this.state.commentState===0?
                                <button className="back" onClick={this.changeCommentState.bind(this)}>评价</button>:
                                this.state.commentState===1?
                                    '':<button>已评价</button>

                        }
                    </div>
                </div>
                {
                    //当正在评价时，出现评论框
                    this.state.commentState===1?
                        <div className="comment-area">
                            <textarea cols="30" rows="10" ref={ref=>this.comment=ref}></textarea>
                            <div>
                                <button onClick={this.sure.bind(this)}>确认评价</button>
                                <button onClick={this.cancel.bind(this)}>取消</button>
                            </div>
                        </div>:''
                }

            </div>
        )
    }
}