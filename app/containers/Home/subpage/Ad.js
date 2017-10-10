import React,{Component} from 'react';
import {getAd} from "../../../fetch/home/index"
import './index.less';
export default class Ad extends Component{
    constructor(){
        super();
        this.state={data:[]}
    }
    componentDidMount(){
        getAd().then(res=>res.json())
               .then(data=>{
                    console.log(data);
                    this.setState({data:data});
                })
    }
    render(){
        return(
            <div className="ad">
                <h3>超值特惠</h3>
                {this.state.data.length>0?
                    this.state.data.map((ad,index)=>(
                        <a href={ad.link} key={index}>
                            <img src={ad.img} title={ad.title}/>
                        </a>

                    )):<div>正在加载...</div>
                }
            </div>
        )
    }
}