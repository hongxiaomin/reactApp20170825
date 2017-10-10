import React,{Component} from 'react';
import './index.less';
import Star from "../Star/index";
export default class InfoComponent extends Component{
    render(){
        let {img,title,star,price,subTitle,desc}=this.props.data;
        return(
            <div className="info-component">
                <div className="info-list">
                    <img src={img} alt=""/>
                    <div>
                        <h3>{title}</h3>
                        <div className="info-star">
                            <Star count={star}/>
                            <span>￥{price}</span>
                        </div>
                        <p>
                            {subTitle}
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="desc" dangerouslySetInnerHTML={{__html:desc}}></div>
            </div>

        )
    }
}