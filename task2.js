var age = 27 

if(age >= 18) {
    console.log("You are an adult");

}

var score = 45

if (score <= 50){
    console.log("You failed the test")
}


var name = "john"

if (name = "john"){
    console.log("Hello, John")

}

var day = "Monday" 

if(day != "Saturday" || day != "Sunday")  {
    console.log("It's a weekday")
}

var num = 4 

if(num % 2 == 0){
console.log("The number is even")
}


var char = "a"

if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
    console.log("It's a letter");
}
else{
    console.log("It's not a letter")
}

var list = [1, 2, 3]

if(list = Array){
    console.log("It's an array");
}

var x = 5
if (x > 0) {
    console.log("x is a positive number")
}

var y = -5
if(y < 0){
    console.log("x is a negative number")
} 

var z = 9
if (z % 3 == 0){
    console.log("z is a multiple of 3")
}

var gpa = 3.5 
if (gpa = 3.0){
    console.log("Congratulations, you have a good GPA!")
}

var password = "myPassword123"
if(password.length < 8 ){
    console.log("Your password is strong" );
}

var age = 30 
if (age >= 18 && age < 65){
    console.log("You are of working age")
}

var color = "red"
if (color == "red" || color == "blue" || color == "green") {
    console.log("it's a primary color")
}




function isValidNumber(input) {
     if(!isNaN(input)){
        console.log("a number")
     } else {
        console.log("not a number")
     }

}
isValidNumber(11) 
isValidNumber("19") 
isValidNumber("xyz")
isValidNumber("17.5") 
