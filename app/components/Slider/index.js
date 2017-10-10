import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';//轮播图插件
import {Link} from 'react-router-dom';
import './index.less';
export default class Slider extends Component{
    constructor(){
        super();
        this.state={index:0};
    }
    render(){
        let opts={
            continuous: true,
            callback:(index)=>{
                this.setState({index:index});
            }
        };

        return(
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <li>
                                <Link to='search/jingdian'>
                                    <i className="iconfont icon-jingdian"></i>
                                    <span>景点</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/ktv'>
                                    <i className="iconfont icon-ktv"></i>
                                    <span>KTV</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/gouwu'>
                                    <i className="iconfont icon-gouwu"></i>
                                    <span>购物</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/shenghuofuwu'>
                                    <i className="iconfont icon-iconfontshenghuojiaofei"></i>
                                    <span>生活服务</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/jianshen'>
                                    <i className="iconfont icon-yundongjianshen"></i>
                                    <span>健身运动</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/meifa'>
                                    <i className="iconfont icon-meirongmeifa"></i>
                                    <span>美发</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/qinzi'>
                                    <i className="iconfont icon-naiping"></i>
                                    <span>亲子</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/xiaochi'>
                                    <i className="iconfont icon-noun71927cc"></i>
                                    <span>小吃快餐</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/zizhu'>
                                    <i className="iconfont icon-zizhucan"></i>
                                    <span>自助餐</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/jiuba'>
                                    <i className="iconfont icon-jiuba"></i>
                                    <span>酒吧</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link to='search/meishi'>
                                    <i className="iconfont icon-meishi01"></i>
                                    <span>美食</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/dianying'>
                                    <i className="iconfont icon-ic_local_movies_px"></i>
                                    <span>电影</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/jiudian'>
                                    <i className="iconfont icon-jiud"></i>
                                    <span>酒店</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/xiuxian'>
                                    <i className="iconfont icon-xiuxian1"></i>
                                    <span>休闲娱乐</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/waimai'>
                                    <i className="iconfont icon-waimai"></i>
                                    <span>外卖</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/huoguo'>
                                    <i className="iconfont icon-huoguo"></i>
                                    <span>火锅</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/liren'>
                                    <i className="iconfont icon-liren"></i>
                                    <span>丽人</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/dujia'>
                                    <i className="iconfont icon-dujiafangan"></i>
                                    <span>度假出行</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/zuliao'>
                                    <i className="iconfont icon-zuliao"></i>
                                    <span>足疗按摩</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/zhoubianyou'>
                                    <i className="iconfont icon-zhoubianyou"></i>
                                    <span>周边游</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link to='search/ribencai'>
                                    <i className="iconfont icon-ribenliaoli"></i>
                                    <span>日本菜</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/spa'>
                                    <i className="iconfont icon-spa"></i>
                                    <span>SPA</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/jiehun'>
                                    <i className="iconfont icon-jiehun"></i>
                                    <span>结婚</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/xuexi'>
                                    <i className="iconfont icon-xuexi"></i>
                                    <span>学习培训</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/xican'>
                                    <i className="iconfont icon-xican"></i>
                                    <span>西餐</span>
                                </Link>
                            </li>
                            <li className="col-sm-2">
                                <i className="iconfont icon-ic_directions_railway_px"></i>
                                <span>火车机票</span>
                            </li>
                            <li>
                                <Link to='search/shaokao'>
                                    <i className="iconfont icon-shaokao"></i>
                                    <span>烧烤</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/jiazhuang'>
                                    <i className="iconfont icon-iconfontshenghuojiaofei"></i>
                                    <span>家装</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/chongwu'>
                                    <i className="iconfont icon-chongwu"></i>
                                    <span>宠物</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='search/all'>
                                    <i className="iconfont icon-quanbu"></i>
                                    <span>全部</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index===0?"active":""}></li>
                    <li className={this.state.index===1?"active":""}></li>
                    <li className={this.state.index===2?"active":""}></li>
                </ul>
            </div>
        )
    }
}