import React,{Component} from 'react';
import './index.less';
export default class ChangeCity extends Component{
    render(){
        return(
            <div className="change-city">
                <h3>选择城市</h3>
                <ul className="change-city-list" onClick={(event)=>{this.props.changeCity(event.target.innerText)}}>
                    <li>北京</li>
                    <li>上海</li>
                    <li>深圳</li>
                    <li>天津</li>
                    <li>重庆</li>
                    <li>山东</li>
                    <li>山西</li>
                    <li>河北</li>
                    <li>河南</li>
                    <li>湖北</li>
                    <li>湖南</li>
                    <li>福建</li>
                    <li>三亚</li>
                    <li>贵州</li>
                    <li>四川</li>
                </ul>
            </div>
        )
    }
}