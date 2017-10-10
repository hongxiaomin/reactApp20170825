import React,{Component} from 'react';
import './index.less';
export default class Buy extends Component{
    render(){
        console.log(this.props.isStore);
        return(
            <div className="buy">
                {
                    this.props.isStore?<button onClick={()=>{this.props.store()}}>取消收藏</button>:<button onClick={()=>{this.props.store()}}>收藏</button>
                }
                <button onClick={()=>{this.props.buy()}}>购买</button>
            </div>
        )
    }
}