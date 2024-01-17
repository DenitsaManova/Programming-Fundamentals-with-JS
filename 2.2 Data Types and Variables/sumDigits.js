function sumDigits (num){
    let textNumber = num.toString();
    let sum = 0;

    for (let i = 0; i < textNumber.length; i++){
        let digit = Number(textNumber[i]);
        sum += digit;
    }
    console.log(sum);
}
sumDigits(245678)