import React,{Component} from 'react';
export default class SearchInput extends Component{
    constructor(props){
        super(props);
        this.state={value:props.value||''};
    }
    handleChange(event){
        let val=event.target.value;
        this.setState({
            value:val
        });
    }
    search(event){
        if(event.keyCode===13){
            this.props.toSearch(this.state.value);
        }
    }
    render(){
        return(
            <input type="text" placeholder="请输入关键字" onChange={this.handleChange.bind(this)} onKeyUp={this.search.bind(this)} value={this.state.value}/>
        )
    }
}