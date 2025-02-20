// Chapter 10 (if statements)

// Q1
// var city = "karachi";
// if (city == "karachi"){
//     console.log("The city of lights")
// }

// Q2

// var x = 1;
// var y = 1;

// if (x === y){
//     var z = +prompt("Enter number")
// }

// console.log(`The value of z is: ${z}`)

// Q3
// var zip = +prompt ("Enter zip code");
// if (zip === 10010){
//     alert("Karachi");
// }
// else{
//     alert("Enter correct city");
// }

// Q4
// var x = 1;
// if (x===1){
//     x=25;
// }
// console.log(x);



// Chapter 11 (Comparison Operators)

// Q1

// var x = 10;
// var y = 20;
// if (x != y){
//     alert("Unequal");
// }

// Q2
// var x = 30;
// var y = 20;

// if (x>=y){
//     alert("X is greater than or equal to Y")
// }

// Q3
// var x = 1;
// var y = 2;
// if (x!==y){
//     x=2;
//     console.log(x);
// }

// Q4
// var x = 1;
// var y = 2;
// if (x!==y){
//     alert("Congo pongo");
// }

// Q5
// var firstName = prompt ("Enter name");
// if (firstName.toLowerCase() == "mohtishim"){
//     alert("No Match");
// }

// Chapter 12 (if…else and else if statements)

// Q1
// var x = 2;
// var y = 3;
// if (x===y){
//     alert("X is equal");
// }
// else if (x != y){
//     alert("X is unequal to Y");
// }

// Q2

// var chemMarks = +prompt("Enter Chemitry marks");
// var phyMarks = +prompt("Enter Physics marks");
// var bioMarks = +prompt("Enter Biology marks");

// var totalMarks = chemMarks+phyMarks+bioMarks

// if (totalMarks>=150){
//     alert("You Are Pass");
// }

// else if(totalMarks<=149){
//     alert("You Are Fail");
// }

// Q3
// var a = +prompt("Enter value of a");
// if (a===10){
//     alert("a = 10");
// }
// else if (a != 10){
//     alert(`a = ${a}`);
// }

// Q4
// var city = prompt("Enter city");
// if (city.toLowerCase() == "karachi"){
//     alert("Welcome from karachi");
// }

// else if (city.toLowerCase() == "lahore"){
//     alert("Welcome from karachi");
// }
// else{
//     alert("Unknown city");
// }


// Chapter 13 (Testing sets of conditions)

// Q1
// var a = 1;
// var b = 1;
// var c = 2;
// var d = 2;

// if (a === b && c === d ){
//     console.log("Both conditions are true");
// }

// Q2
// var a = 1;
// var b = 1;
// var c = 2;
// var d = 3;

// if (a===b || c!=d){
//     console.log("either or both are true");
// }

// Q3
// var _name = prompt("Enter name");
// var age = +prompt("Enter age");

// if ((_name == "hamza" || _name == "arsalan") && age <= 60){
//     alert("True condition");
// }
// else{
//     alert("False condition");
// }

// Q4
// var a = 20;
// var b = 30;

// if (a > b){
//     alert("A is greater than B");
// }
// else if (b > a){
//     alert("B is greater than A");
// }

// Q5
// var fName = prompt("Enter First Name");
// var lName = prompt("Enter Last Name");

// if (fName.toLowerCase()=="mohtishim" && lName.toLowerCase()=="mohiuddin"){
//     alert("Welcome Mohtishim Sir");
// }



// USER INPUT & CONDITIONAL STATEMENT
// Assignment # 9-10


// Q1
// var cityName = prompt("Enter city");

// if (cityName.toLowerCase()=="karachi"){
//     alert("welcome to city of lights");
// }

// Q2

// var gender = prompt("Enter your gender");

// if (gender.toLowerCase() == "male"){
//     alert("Welcome Sir");
// }
// else if (gender.toLowerCase() == "female"){
//     alert("Welcome Madam");
// }

// Q3
// var redSignal = prompt("Red color of traffic signal is for??");
// var yellowSignal = prompt("Yellow color of traffic signal is for??");
// var greenSignal = prompt("Green color of traffic signal is for??");

// document.write(`<table>
//         <tr>
//             <td>Signal Color</td>
//             <td>Message</td>
//         </tr>
//         <tr>
//             <td>Red</td>
//             <td>${redSignal}</td>
//         </tr>
//         <tr>
//             <td>Yellow</td>
//             <td>${yellowSignal}</td>
//         </tr>
//         <tr>
//             <td>Green</td>
//             <td>${greenSignal}</td>
//         </tr>
//     </table>`)

// Q4
// var fuel = +prompt("Fuel remaining in your car, in liter?");
// if (fuel <= 0.25){
//     alert("“Please refill the fuel in your car”");
// }
// else{
//     alert("Go ahead");
// }

// Q5
// a 
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// True 

// b 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// false


// c 
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// 2 and 4 is true

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// true condition 


// e. 
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// true is answer

// f. 
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Q6
// var ChemMarks = +prompt("Obtained marks in Chemistry out of 100");
// var PhyMarks = +prompt("Obtained marks in Physics out of 100");
// var BioMarks = +prompt("Obtained marks in Bio out of 100");

// var percentage = (ChemMarks+PhyMarks+BioMarks)/300*100;

// if (percentage >= 80){
//     var grade = "A-one";
//     var remarks = "Excellent";
// }

// else if(percentage >= 70){
//     var grade = "A";
//     var remarks = "Good";
// }
// else if(percentage >= 60){
//     var grade = "B";
//     var remarks = "You need to improve";
// }
// else if(percentage < 60){
//     var grade = "Fail";
//     var remarks = "Sorry";
// }

// document.write(
//     `<table>
//         <tr>
//         <td>Percentage</td>
//         <td>Grade</td>
//         <td>Remarks</td>
//     </tr>
//     <tr>
//         <td>${percentage}%</td>
//         <td>${grade}</td>
//         <td>${remarks}</td>
//     </tr>
//     </table>`
// )

// Q7
// Guess game 

// var secretNumber = 5;
// var guess = +prompt("Guess number 1 to 10");

// if (guess===secretNumber){
//     alert("Bingo! Correct answer");
// }
// else if (guess===6){
//     alert("“Close enough to the correct answer”.");
// }
// else if (guess===4){
//     alert("“Close enough to the correct answer”.");
// }
// else{
//     alert("Try Again");
// }

// Q8
// var number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//   alert(`${number} is divisible by 3.`);
// } else {
//   alert(`${number} is NOT divisible by 3.`);
// }

// Q9
// var number = +prompt("Enter a number:");

// if (number % 2 === 0) {
//   alert(`${number} is even`);
// } else {
//   alert(`${number} is odd`);
// }

// Q10
// var temp = +prompt("Enter temperature");
// if (temp>40){
//     alert("“It is too hot outside.”");
// }
// else if (temp>30){
//     alert("“The Weather today is Normal.”");
// }
// else if (temp>20){
//     alert("“Today’s Weather is cool.”");
// }
// else if (temp>10){
//     alert("“OMG! Today’s weather is so Cool.”");
// }

// Q11
// var firstNum = +prompt("Enter a number");
// var secondNum = +prompt("Enter another number");
// var operation = prompt("Which calculation you wanna perform? + - * / %");

// if (operation=="+"){
//     alert(firstNum+secondNum);
// }
// else if (operation=="-"){
//     alert(firstNum-secondNum);
// }
// else if (operation=="*"){
//     alert(firstNum*secondNum);
// }
// else if (operation=="/"){
//     alert(firstNum/secondNum);
// }
// else if (operation=="%"){
//     alert(firstNum/secondNum*100);
// }


// IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS
// Assignment # 12-13


// Q1
// Not understanding

// Q2
// cant solve 

// Q3
// var number = +prompt("Enter number");
// if (number > 0){
//     alert("Number is positive");
// }

// else if (number < 0){
//     alert("Number is negative");
// }
// else if (number === 0){
//     alert("Number is 0");
// }

// Q4
// var input = prompt("Enter alphabet");
// if(input==="a" || input == "e" || input == "i" || input =="o" || input == "u"){
//     alert("Vowel");
// }
// else{
//     alert("Not a vowel");
// }

// Q5
