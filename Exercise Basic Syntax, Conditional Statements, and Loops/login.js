
function reverseString(str) {
    let index = 1;
    let user = str[0];
    let newString = "";
    let count = 0;
   
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    let input = str[index];
    
   while(!input === newString){
    if (count = 3){
        console.log(`User ${user} blocked!`);
        break;
    }else {
    console.log("Incorrect password. Try again.");
    count++;
    }
    index++;
   } 
}
reverseString('Acer','login','go','let me in','recA')