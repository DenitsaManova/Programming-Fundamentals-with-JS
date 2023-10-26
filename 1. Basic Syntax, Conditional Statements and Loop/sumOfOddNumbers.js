function demo (num){
    let rotation = 1;
    let sum = 1;
    let j = 2;
    console.log(1);
   while(true){
      if(j % 2 == 1){
        console.log(j);
        rotation++;
        sum += j;
        j++;
      }else {
        j++;
      }
      if(rotation == num){
        console.log(`Sum: ${sum}`)
        break;
      }

   }
}
demo(5)