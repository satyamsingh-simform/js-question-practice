const myLocalStorage={
    prefix:"local__",
    customSetItem(key,value,expire){
        const obj={
            value:value,
            expiry:Date.now() + expire,
        }
        localStorage.setItem(this.prefix+key,JSON.stringify(obj))
    },
    customGetItem(key){
        const obj=JSON.parse(localStorage.getItem(this.prefix+key));
        if(Date.now()>obj.expiry){
            console.log('value expire');
            localStorage.removeItem(this.prefix+key)//key has string in it pass key directly
            // return obj.value;        //this will return the data irrespective of removeItem bcz obj already had the value 
            return null;
        }
        return obj.value;
    }
}

myLocalStorage.customSetItem('data','Jamshedpur',3000);
console.log(myLocalStorage.customGetItem('data'));

setTimeout(()=>{
    console.log('inside setTimeout');
    console.log(myLocalStorage.customGetItem('data'));
},7000)