//Check if number is prime or not
function checkPrimeNum(num1){
    let count=0;
    for(let i=2;i<num1;i++){
        if(num1%i==0){
            count++;
        }
    }
    if(count>0){
        console.log(`${num1} is not a prime number`);
    }
    else{
        console.log(`${num1} is a prime number`);
    }
}
checkPrimeNum(10);