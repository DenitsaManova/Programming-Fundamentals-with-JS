function solve(people, type, day){
    if(type === "Students"){
       switch(day){
        case "Friday": 
        let priceFriday = people * 8.45;
          if (people >= 30){
           priceFriday = priceFriday - (priceFriday * 0.15);
           console.log(`Total price: ${priceFriday.toFixed(2)}`);
          }else {
            console.log(`Total price: ${priceFriday.toFixed(2)}`);
          }
            break;
        case "Saturday":
            let priceSaturday = people * 9.80;
            if (people >= 30){
             priceSaturday = priceSaturday - (priceSaturday * 0.15);
             console.log(`Total price: ${priceSaturday.toFixed(2)}`);
            }else {
              console.log(`Total price: ${priceSaturday.toFixed(2)}`);
            }
            break;
        case "Sunday":
            let priceSunday = people * 10.46;
          if (people >= 30){
           priceSunday = priceSunday - (priceSunday * 0.15);
           console.log(`Total price: ${priceSunday.toFixed(2)}`);
          }else {
            console.log(`Total price: ${priceSunday.toFixed(2)}`);
          }
            break;
       }
    }else if(type === "Business"){
        switch(day){
            case "Friday":
                let priceBFriday = people * 10.90;
                if(people >= 100){
                    priceBFriday = priceBFriday - (10 * 10.90);
                    console.log(`Total price: ${priceBFriday.toFixed(2)}`);
                }else {
                    console.log(`Total price: ${priceBFriday.toFixed(2)}`);
                }
                break
            case "Saturday":
                let priceBSaturday = people * 15.60;
                if(people >= 100){
                    priceBSaturday = priceBSaturday - (10 * 15.60);
                    console.log(`Total price: ${priceBSaturday.toFixed(2)}`);
                }else {
                    console.log(`Total price: ${priceBSaturday.toFixed(2)}`);
                }
                break;
            case "Sunday":
                let priceBSunday = people * 16;
                if(people >= 100){
                    priceBSunday = priceBSunday - (10 * 16);
                    console.log(`Total price: ${priceBSunday.toFixed(2)}`);
                }else {
                    console.log(`Total price: ${priceBSunday.toFixed(2)}`);
                }
                break;
        }

    }else if(type === "Regular"){
        switch(day){
            case "Friday":
                let priceRFriday = people * 15;
                if(people >= 10 && people <= 20){
                    priceRFriday = priceRFriday - (priceRFriday * 0.05);
                    console.log(`Total price: ${priceRFriday.toFixed(2)}`);
                }else{
                    console.log(`Total price: ${priceRFriday.toFixed(2)}`);
                }
                break
            case "Saturday":
                let priceRSaturday = people * 20;
                if(people >= 10 && people <= 20){
                    priceRSaturday = priceRSaturday - (priceRSaturday * 0.05);
                    console.log(`Total price: ${priceRSaturday.toFixed(2)}`);
                }else{
                    console.log(`Total price: ${priceRSaturday.toFixed(2)}`);
                }
                break;
            case "Sunday":
                let priceRSunady = people * 22.50;
                if(people >= 10 && people <= 20){
                    priceRSunady = priceRSunady - (priceRSunady * 0.05);
                    console.log(`Total price: ${priceRSunady.toFixed(2)}`);
                }else{
                    console.log(`Total price: ${priceRSunady.toFixed(2)}`);
                }
                break;
        }

    }
}
solve(30,"Students","Sunday")