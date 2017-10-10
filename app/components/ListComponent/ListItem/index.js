import React,{Component} from 'react';
import {Link} from 'react-router-dom'//Link 组件主要用于跳转组件的，to属性必须要有
import './index.less'
export default class ListItem extends Component{
    render(){
        let {img,title,subTitle,price,distance,number,id}=this.props.data;
        return(
            <Link to={'/detail/'+id}>
                <li className="list-item">
                    <img src={img} alt=""/>
                    <div className="list-item-content">
                        <h3>{title}</h3>
                        <p>{subTitle}</p>
                        <div>
                            <strong>￥{price}</strong>
                            <span>已售{number}</span>
                        </div>
                        <span className="distance">{distance}</span>
                    </div>
                </li>
            </Link>
        )
    }
}