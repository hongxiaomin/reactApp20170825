import React,{Component} from 'react';
import {getOrderList,postComment} from "../../../fetch/orderList/index";
import OrderListComponent from "../../../components/OrderListComponent/index";
export default class OrderList extends Component{
    constructor(){
        super();
        this.state={data:[]};
    }
    componentDidMount(){
        this.processData(getOrderList(this.props.username));
    }
    processData(result){
        result.then(res=>res.json()).then(data=>{
            console.log(data);
            this.setState({data});
        })
    }
    commitComment(id,comment,callback){//内容 商户ID callback
        postComment({id:id,comment:comment}).then(res=>res.json()).then(data=>{
            console.log(data);
            callback();
        });

    }
    render(){
        return(
            <div>
                {
                    this.state.data.length>0?<OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/>:<div>您目前暂无订单</div>
                }
            </div>
        )
    }
}