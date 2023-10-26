function triangle (input){
    for (let index = 1; index <= input; index++) {
        let result = "";
        for (let j = 1; j <= index; j++) {
            result += index + " ";
        }
        console.log(result);
    }
    
}
triangle(5)