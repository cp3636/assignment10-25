//ch3: following day

function excercise1(){
    let input = prompt("Day of the week");
    let whatDay = input.toString();

    switch(whatDay){
        case "Monday":
            console.log("Tuesday");
            break;
        case "Tuesday":
            console.log("Wednesday");
            break;
        case "Wednesday":
            console.log("Thursday");
            break;
        case "Thursday":
            console.log("Friday");
         break;
        case "Friday":
            console.log("Saturday");
            break;
        case "Saturday":
            console.log("Sunday");
            break;
        case "Sunday":
            console.log("Monday");
            break;
        default:
            console.log("Not a valid day.")
    }
}

//ch 4: neither yes nor no
var doYoulikechickens = confirm("Are you sure you like chickens");
if (proceed) {
  //proceed
} else {
  //don't proceed
}
if (confirm('Are you sure you like chickens')) {
    // true 
    console.log('good, have a chicken');
  } else {
    // false
    console.log('thats what I thought')
  }
//OR
let chickens= "yay"
if (chickens) {
    console.log('Yay! I like chickens too');
  } else {
    console.log('BOO');
  }


  //ch 5: Calculator
  const calculate = function(num1, num2) {
    return num1 * num2;
  };


  console.log(calculate(4, "+", 6)); //must show 10
  console.log(calculate(4, "-", 6)); //must show -2
  console.log(calculate(4, "*", 6)); //must show 0
  console.log(calculate(4, "/", 6)); //must show infinity


