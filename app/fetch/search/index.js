import {get} from '../index';
export function getSearchList(kind,keyword,page){
    if(!keyword){
        return get('/api/search/'+kind+'/'+page);
    }else{
        return get('/api/search/'+kind+'/'+keyword+'/'+page);
    }

};