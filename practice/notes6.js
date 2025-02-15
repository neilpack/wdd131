// IF AND SWITCH STATEMENTS

let temperature = 25;
if (temperature > 80) {
    console.log("");
} else if (temperature = 80) {
    console.log("");
} else {
    console.log("");
}

let day = "Monday";
switch (day) {
    case "Monday":
        console.log("monday is awesome");
        break;
    case "Friday":
        console.log("friday is cool");
        break;
    default:
        console.log("everything is pain");
}

//lists or arrays
const fruit = ['watermelon','peach','apple','banana'];
console.log(fruit[0], fruit[1]);
fruit[4] = "grapes";
fruit.push("orange");

//iteration
//fun fact, for loops are bad in javascript
fruit.forEach(myFunction);
function myFunction(item){
    console.log(item);
}
const nums = [1, 2, 3, 4];
nums.map(double); //.map creates a new array from an old array
function double(item){
    const doubleNums = item * 2;
    console.log(doubleNums);
}
const sum = nums.reduce(totalNums);
function totalNums(total, item){
    return total + item;
}
const avgNum = sum/4
console.log(avgNum)
const ages = [12, 33, 16, 40];
const result = ages.filter(checkAdult);
console.log(result);
function checkAdult(age){
    return age >= 18;
}


// TIME FOR OBJECTS LFG
let car = {
    brand: "Honda",
    modal: "passport",
    start: function() {
        console.log("Car is starting")
    }
}
car.start(); //calls the method
//funcions inside objects are called methods