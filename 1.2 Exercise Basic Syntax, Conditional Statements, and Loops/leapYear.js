function leapYear (input){
    if (input % 4 == 0  || input % 400 == 0 ){
      console.log("yes");
    }else {
        console.log("no")
    }
}
leapYear(1900)