import React,{Component} from 'react';
import {
    HashRouter as Router,//提供一个路由容器
    Route,//单条路由
    Switch
} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import User from '../containers/User';
import Detail from "../containers/Detail/index";
import City from "../containers/City/index";
import Search from "../containers/Search/index";
export default class MapRouter extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/detail/:id" component={Detail}/>
                        {/*点击先调转到登陆页，登陆后 再回到登陆之前的页面，
                        在login路径后可能需要保存上次点击login的路径
                        如果登陆过在登陆跳转到用户页面*/}
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/city" component={City}/>
                        <Route path="/search/:kind/:keyword?" component={Search}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}