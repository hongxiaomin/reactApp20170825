import React,{Component} from 'react';
import SearchHeader from "../../components/SearchHeader/index";
import {getSearchList} from "../../fetch/search/index"
import LoadMore from "../../components/LoadMore/index";
import ListComponent from "../../components/ListComponent/index";
//可以从轮播图点击进来/search/jingdian
//搜索框输入内容进来/search/all/keyword
export default class Search extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            hasMore:true,
            isLoading:true,
            page:0
        }
    }
    componentDidMount(){
        console.log(this.props.match.params);
        let kind=this.props.match.params.kind;
        let keyword=this.props.match.params.keyword;
        this.processData(getSearchList(kind,keyword,this.state.page),false);
    }
    loadMore(){
        this.setState({
            isLoading:true,
            page:this.state.page+1
        },()=>{
            let kind=this.props.match.params.kind;
            let keyword=this.props.match.params.keyword;
            this.processData(getSearchList(kind,keyword,this.state.page),true);
        })
    }
    processData(result,more){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            if(more){
                this.setState({
                    data:this.state.data.concat(data),
                    hasMore:hasMore,
                    isLoading:false
                })
            }else{
                this.setState({
                    data:data,
                    hasMore:hasMore,
                    isLoading:false
                })
            }
        })
    }
    toSearch(value){
        this.props.history.push('/search/all/'+value);
        this.setState({
            page:0
        },()=>{
            console.log(this.props.match.params);
            let kind=this.props.match.params.kind;
            let keyword=this.props.match.params.keyword;
            this.processData(getSearchList(kind,keyword,this.state.page),false);
        })
    }
    render(){
        return(
            <div>
                <SearchHeader value={this.props.match.params.keyword} history={this.props.history} toSearch={this.toSearch.bind(this)}/>
                <ListComponent data={this.state.data}/>
                <LoadMore isLoading={this.state.isLoading} loadMore={this.loadMore.bind(this)} hasMore={this.state.hasMore}/>
            </div>
        )
    }
}