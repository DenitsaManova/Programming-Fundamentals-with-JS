function solve(num){
    num = num.toString ();
    let sumOfDigits = 0;
    for (let i = 0; i < num.length; i++) {
        sumOfDigits += Number(num[i]);
        
    }
    if(sumOfDigits.toString().includes('9')){
        console.log(`${num} Amazing? True`)
    }else{
        console.log(`${num} Amazing? False`);
    }
}
solve(222)