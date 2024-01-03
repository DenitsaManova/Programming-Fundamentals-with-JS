function requiredReading (pagesBook, pagesInHour, days){
    let time = pagesBook / pagesInHour;
    let hoursPerDay = time / days;
    console.log(hoursPerDay);
}
requiredReading(212,
    20 ,
    2 
    )