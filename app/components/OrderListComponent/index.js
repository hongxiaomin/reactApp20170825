import React,{Component} from 'react';
import OrderListItem from "../OrderListItem/index";
export default class OrderListComponent extends Component{
    render(){
        return(
            <div>
                <h3 style={{margin:'10px'}}>您的订单</h3>
                {
                    this.props.data.map((item,index)=>(
                        <OrderListItem data={item} key={index} commitComment={this.props.commitComment}/>
                    ))
                }
            </div>
        )
    }
}