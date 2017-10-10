import React,{Component} from 'react';
import {getComments} from '../../../fetch/detail';
import CommentComponent from "../../../components/CommentComponent/index";
import LoadMore from "../../../components/LoadMore/index";
export default class Comment extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            hasMore:true,
            page:0,
            isLoading:true
        }
    }
    loadMore(){
        this.setState({
            page:this.state.page+1,
            isLoading:true,
        },()=>{
            this.processData(getComments(this.props.id,this.state.page));
        })

    }
    componentDidMount(){
        this.processData(getComments(this.props.id,this.state.page));
    }
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({data:this.state.data.concat(data),hasMore,isLoading:false})
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.data.length>0?<CommentComponent data={this.state.data}/>:<div>正在加载...</div>
                }
                <LoadMore isLoading={this.state.isLoading} loadMore={this.loadMore.bind(this)} hasMore={this.state.hasMore}/>
            </div>
        )
    }
}