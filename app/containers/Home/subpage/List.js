import React,{Component} from 'react';
import {getList} from "../../../fetch/home/index";
import ListComponent from "../../../components/ListComponent/index";
import LoadMore from "../../../components/LoadMore/index";

export default class List extends Component{
    constructor(){
        super();
        this.state={
            data:[],//是否有数据
            hasMore:true,//是否有更多
            page:0,//页码
            isLoading:true//是否正在加载
        }
    }
    componentDidMount(){
        this.processDate(getList(this.props.cityName,0));
    }
    //处理成功后的逻辑
    processDate(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                data:this.state.data.concat(data),
                hasMore:hasMore,
                isLoading:false
            })
        })
    }
    loadMore(){
        this.setState({
            page:this.state.page+1,
            isLoading:true//每次加载更多时，状态都应该为正在加载
        },()=>{
            this.processDate(getList(this.props.cityName,this.state.page))
        })
    }
    render(){
        return(
            <div className="list">
                <h3 className="list-title">你喜欢的</h3>
                {
                    this.state.data.length>0?<ListComponent data={this.state.data} hasMore={this.state.hasMore}/>:<div>正在加载...</div>
                }
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
            </div>
        )
    }
}