import React,{Component} from 'react';
import './index.less'
export default class LoadMore extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        //绑定滚动时间
        this.fn=()=>{
            clearTimeout(this.timer);
            this.timer=setTimeout(()=>{
                if(this.props.isLoading){
                    return;
                }
                let screen=window.screen.height;
                let top=this.loadMore.getBoundingClientRect().top;//获取当前元素的位置
                if(top<screen){//如果按钮进入可视窗口则加载数据
                    this.props.loadMore();
                }
            },200);
        };
        window.addEventListener('scroll',this.fn)
    }

    componentWillUnmount(){
        //一出滚动时间
        window.removeEventListener('scroll',this.fn);
    }
    render(){
        console.log(this.props.hasMore);
        return(
            <div className="has-more">
                {this.props.hasMore?<div  ref={ref=>this.loadMore=ref}>加载更多</div>:<div>我是有底线的</div>}
            </div>
        )
    }
}