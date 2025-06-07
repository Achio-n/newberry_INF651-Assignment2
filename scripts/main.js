//Jesse Newberry
//INF651 Summer 2025
//June 7, 2025
//Assignment 2

let challenge1Button = document.getElementById("challenge1Button");
let challenge2Button = document.getElementById("challenge2Button");
let challenge3Button = document.getElementById("challenge3Button");
let challenge4Button = document.getElementById("challenge4Button");
let challenge5Button = document.getElementById("challenge5Button");
let challenge6Button = document.getElementById("challenge6Button");
let challenge7Button = document.getElementById("challenge7Button");
function challenge1() {
  //Variables and Data Types
 let myName = prompt("Please enter your name.");
 let age = prompt("Please enter your age");
 let student = confirm("If you are a student, click ok, otherwise click cancel.")

//Alternatively, we could assign values like so: 
// let myName = "John Jacobson";
// let age = 32;
// let student = true;
console.log("Name: " + myName + ' ' + "\nAge: " + age +  "\nStudent? " + student);
}

function challenge2(){
  //Basic Arithmetic Operations
  let x = 1089;
  let y = 33;
  let added = x + y;
  let multiplied = x*y;
  let divided = x/y;

  console.log(" x plus y is equal to: " + added + "\n");
  console.log(" x times y is equal to: " + multiplied + "\n");
  console.log(" x divided by y is equal to: " + divided + "\n");
}
function challenge3(){
  //Working with Strings
  let strSentence = "This sentence will demonstrate the use of string manipulation";
  let strLength = strSentence.length;
  let strFirst = strSentence.substring(0,1);
  let strLast = strSentence.slice(-1);
  
  console.log("The length of the sentence is: " + strLength + " characters.\n");
  console.log("The first character of the sentence is: " + strFirst + "\n");
  console.log("The last character of the sentence is: " + strLast + "\n");
}
function challenge4(){
  //Math Object
  let intNeg = -1089;
  let intNegSqRt = Math.sqrt(intNeg);
  let intNegSq = Math.pow(intNeg, 2);
  let intNegAbs = Math.abs(intNeg);

  console.log("The square root of : " + intNeg + " is: " + intNegSqRt + "\n");
  console.log(intNegSq + " Squared is:" + intNegSq + "\n");
  console.log("The absolute value of : " + intNeg + " is: " + intNegAbs + "\n");

}
function challenge5(){
  //Boolean Logic and Comparison Operators
  let intVal1 = 33;
  let intVal2 = 66;

  if (intVal1 < intVal2){
    console.log("The first value " + intVal1 + " is less than the second value " + intVal2);
  }else if (intVal1 > intVal2){
    console.log("The second value " + intVal2 + " is less than the first value " + intVal1);
  }else{
    console.log("The first value " + intVal1 + " is equal to the second value " + intVal2);
  }

}
function challenge6(){
  //Logical Operators

let bln1 = true;
let bln2 = false;

console.log("bln1 && bln2 = " + bln1 && bln2);
console.log("bln1 || bln2 = " + bln1 || bln2);
console.log("!bln1 = " + !bln1);
console.log("!bln2 = " + !bln2);

}
function challenge7(){
  //Using Template Literals

}
challenge1Button.addEventListener("click", () => {
  challenge1();
});
challenge2Button.addEventListener("click", () => {
  challenge2();
});
challenge3Button.addEventListener("click", () => {
  challenge3();
});
challenge4Button.addEventListener("click", () => {
  challenge4();
});
challenge5Button.addEventListener("click", () => {
  challenge5();
});
challenge6Button.addEventListener("click", () => {
  challenge6();
});
challenge7Button.addEventListener("click", () => {
  challenge7();
});
