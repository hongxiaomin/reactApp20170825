import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux';
import {update} from '../../actions/userInfo';
import CurrentCity from "../../components/CurrentCity/index";
import ChangeCity from "../../components/ChangeCity/index";
class City extends Component{
    constructor(){
        super();
    }
    changeCity(city){
        console.log(city);
        let oldInfo=this.props.userInfo;
        oldInfo.cityName=city;
        this.props.userActions(oldInfo);
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <HeaderComponent title="选择城市" history={this.props.history}/>
                <CurrentCity userInfo={this.props.userInfo}/>
                <ChangeCity  changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }
}
export default connect((state)=>{
    return{
        userInfo:state.userInfo
    }
},{userActions:(data)=>(update(data))})(City)