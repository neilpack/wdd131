//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; //for some reason normal quotes '' don't work so I needed to use special ones?? yeah coding is dumb af
}
const stepsHtml = steps.map(listTemplate);
document.querySelector('#myList').innerHTML = stepsHtml.join('');

let grades = ["A", "B", "A", "C"];
let gpaPoints = grades.map(function(grade) {
    switch (grade){
        case "A":
            point = 4;
            break;
        case "B":
            point = 3;
            break;
        case "C":
            points = 2;
            break;
        default:
            alert('Not a valid grade');
    }
    return point;
})
console.log(gpaPoints);
let totalPoint = gpaPoints.reduce(getTotal);
function getTotal(total, item){
    return total + item;
}
console.log(totalPoint);
let gpaAverage = totalPoint/gpaPoints.length;
console.log(gpaAverage);


let fruit = ['watermlon', 'peach', 'apple', 'tomato', 'grape'];
let shortFruit = fruit.filter((item)=> item.length < 6);
console.log(shortFruit);