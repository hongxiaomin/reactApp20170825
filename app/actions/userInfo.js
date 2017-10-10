import * as Types from '../action-types/userInfo';

//actionCreater 是一个函数，action创建者
export function update(data){
    console.log(data);
    return {
        type:Types.UPDATE_CITY,
        data
    }
}