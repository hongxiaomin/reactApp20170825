import {get} from '../index';
export function getInfo(id){
    return get('/api/detail/info/'+id);
};
//获取列表数据
export function getComments(id,page){
    return get('/api/detail/comments/'+id+'/'+page);
};