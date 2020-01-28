//1. Given two numbers, write a function that will return  the larger number

function largerNum(num1, num2) {
    return Math.max(num1, num2);
}

// 2. Given two numbers, amount correct and amount possible of a test, return the corresponding letter grade.
// Example: 
// input: 23, 25
// output: "A"
// Example:
// input: 4, 10
// output: "F"

function testGrader(score, possible) {
    let grade;
    score / possible >= 0.9 ? grade = 'A' : grade = 'F';
    return grade;
}


// --------------------------------------------


// 3. Given an integer that represents an hour in the day (1 - 24), write a function that returns "good morning", "good afternoon", "good evening", or "good night" based off of what hour it is. You'll need to think in military time.
//Morning is between 5am and 11am (5 - 11)
//afternoon is between 12pm and 5pm (12 - 17)
//evening is between 6pm and 9pm (18 - 21)
//night is between 10pm and 4am (22 -24 and 1 - 4)
//Make sure your ranges are inclusive

function timeOfDayGreeting(hour) {
    // switch (hour) {
    //     case (hour <= 24 && hour >= 22):
    //         console.log("good night");
    //         break;
    //     case (4 >= hour && hour >= 1):
    //         console.log("good night");
    //         break;
    //     case (21 >= hour && hour >= 18):
    //         console.log("good evening");
    //         break;
    //     case (17 >= hour && hour >= 12):
    //         console.log("good afternoon");
    //         break;
    //     case (11 >= hour && hour >= 5):
    //         console.log("good morning");
    //         break;
    // }
    if (hour <= 24 && hour >= 22) {
        return 'good night';
    } else if (4 >= hour && hour >= 1) {
        return 'good night';
    } else if (21 >= hour && hour >= 18) {
        return 'good evening';
    } else if (17 >= hour && hour >= 12) {
        return 'good afternoon';
    } else if (11 >= hour && hour >= 5) {
        return 'good morning';
    }

}

//4. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (at or above 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
function isFever(temp) {
    let diagnosis;
    temp >= 103 ? diagnosis = 'fever go to hospital' : temp > 98.6 ? diagnosis = 'fever' : 'no fever';

    return diagnosis;
}

//5. Write a function that takes in a car object, if it is not moving then return true
let myCar = {
    make: "Ford",
    model: "Mustang",
    color: "Red",
    moving: false
}

function isStopped(car) {
    let moving = false;
    myCar.moving ? moving = true : null;
    return moving;
}

//6. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false

let dish = {
    yourDish: true,
    isDirty: true
}

function washDish(dish) {
    if (dish.yourdish && dish.isDirty) {
        return true;
    } else {
        return false;
    }
}