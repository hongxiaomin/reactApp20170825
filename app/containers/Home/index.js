import React,{Component} from 'react';
import {connect} from 'react-redux';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from "../../components/Slider/index";
import Ad from "./subpage/Ad";
import List from './subpage/List';
class Home extends Component{
    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName} history={this.props.history}/>
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}

let fromStateToProps=(state)=>{
  return {
      userInfo:state.userInfo
  }
};
let fromDispatchToProps={};

export default connect(fromStateToProps,fromDispatchToProps)(Home)