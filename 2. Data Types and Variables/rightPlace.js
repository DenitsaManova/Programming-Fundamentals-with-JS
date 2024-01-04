function rightPlace (str, chr, rightString){
    let result = str.replace('_', chr);
    if(result === rightString){
        console.log('Matched');
    }else {
        console.log('Not Matched');
    }
    //let output = result === rightString ? 'Matched' : 'Not Matched';
}
rightPlace('Str_ng', 'I', 'Strong')