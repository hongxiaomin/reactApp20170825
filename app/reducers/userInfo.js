import * as Types from "../action-types/userInfo";
export function userInfo(state={},action){
    switch (action.type){
        case Types.UPDATE_CITY:
            return action.data;
        default:
            return state;
    }
}