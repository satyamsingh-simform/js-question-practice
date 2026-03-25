const obj={
    a:{
        b:{
            name:"satya",
            c:[1,2,3]
        }
    }
}

function set(obj,para,value){
    if(typeof para=='string'){
        para= para.replaceAll('[' ,'.').replaceAll(']','').split('.');
        console.log(para);    //'a.b.age' ---> [ 'a', 'b', 'age' ]
    }
    for(let i=0;i<para.length-1;i++){
        let key=para[i];
        if(obj[key]==null){
            obj[key]={};
        }
        obj=obj[key];
    } 
    obj[para[para.length-1]]=value;
    console.log(obj);
}

set(obj,'a.x.y',5);
console.log(obj); //{ a: { b: { name: 'satya', c: [Array] }, x: { y: 5 } } }


function get(obj,para,defaul='wrong key'){
    if(typeof para=='string'){
        para= para.replaceAll('[' ,'.').replaceAll(']','').split('.');
        console.log(para);    //'a.c.d'--->[ 'a', 'c', 'd' ]
    } 
    for(let key of para){
        obj=obj[key];
        console.log(obj);
        if(obj==null)return defaul;
    }
    return obj;
}


console.log(get(obj, ['a','b','c','0']));
console.log(get(obj, ['a','b','name']));
console.log(get(obj, 'a.b.c'));   // dev