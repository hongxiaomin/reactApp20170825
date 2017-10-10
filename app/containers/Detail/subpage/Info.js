import React,{Component} from 'react';
import {getInfo} from '../../../fetch/detail';
import InfoComponent from "../../../components/InfoComponent/index";
export default class Info extends Component{
    constructor(){
        super();
        this.state={info:null};
    }
    componentDidMount(){
        this.processData(getInfo(this.props.id));
    }
    processData(result){
        result.then((res)=>res.json()).then(data=>{
            console.log(data);
            this.setState({info:data});
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.info?<InfoComponent data={this.state.info}/>:<div>正在加载...</div>
                }
            </div>
        )
    }
}