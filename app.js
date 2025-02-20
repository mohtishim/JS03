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