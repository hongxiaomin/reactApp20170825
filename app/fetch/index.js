import 'whatwg-fetch';
import 'es6-promise';

export function get(url){
    return fetch(url,{
        Accept:'application/json'
    })
}
let toUrlencoded=(obj)=>{
  let urlArr=[];
  for(let key in obj){
      urlArr.push(`${key}=${obj[key]}`);
  }
  return urlArr.join('&');
};
export function post(url,obj){
    return fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:toUrlencoded(obj)
    })
}
