function solve(input){
    let dataType = typeof(input);
    console.log(dataType);
    if(dataType == 'string' || dataType == 'number'){
     console.log(input);
    }else{
     console.log('Parameter is not suitable for printing');
    }
 }
 solve(18)
 
 