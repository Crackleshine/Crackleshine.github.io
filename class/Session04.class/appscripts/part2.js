
//PART 1 - Line 1 and Line 2 are in current position
//PRE-FUNCTION BLOCK
var counter2; //LINE 1: declaring a variable. Current value = undefined
counter2 = 5; //LINE 2: initializing a variable. Current value = 0


function foo() {
//FUNCTION BLOCK
	counter2 = counter2 + 1;
    console.log("Inside the function block: counter2’s value is:" + counter2);

}

//POST-FUNCTION BLOCK
console.log("Post-function block: counter2’s value is:" + counter2);
foo();

//Explain
//Function foo() is called after the console.log on line 14. Hence the console.log uses the originally globally-scoped value of counter2





//PART2 - Line 2 is inside function block BEFORE “counter2 = counter2+1” expression
//PRE-FUNCTION BLOCK
var counter2; //LINE 1: declaring a variable. Current value = undefined


function foo() {
//FUNCTION BLOCK
	counter2 = 5; //LINE 2: initializing a variable. Current value = 0
	counter2 = counter2 + 1;
    console.log("Inside the function block: counter2’s value is:" + counter2);

}

//POST-FUNCTION BLOCK
console.log("Post-function block: counter2’s value is:" + counter2);
foo();

//Explain
//Counter2 is locally-scoped, initialized and assigned within the foo() function, therefore values are the same





//PART 3 - Line 2 is inside function block AFTER “counter2 = counter2+1” expression
//PRE-FUNCTION BLOCK
var counter2; //LINE 1: declaring a variable. Current value = undefined


function foo() {
//FUNCTION BLOCK
	counter2 = counter2 + 1;
	counter2 = 5; //LINE 2: initializing a variable. Current value = 0
    console.log("Inside the function block: counter2’s value is:" + counter2);

}

//POST-FUNCTION BLOCK
console.log("Post-function block: counter2’s value is:" + counter2);
foo();

//Explain
//Counter 2 is assigned as 5 each time the var is used, overwriting previous commands




//PART 4 - Line 2 is in post-function block, after function call
//PRE-FUNCTION BLOCK
var counter2; //LINE 1: declaring a variable. Current value = undefined


function foo() {
//FUNCTION BLOCK
	counter2 = counter2 + 1;
    console.log("Inside the function block: counter2’s value is:" + counter2);

}

//POST-FUNCTION BLOCK
console.log("Post-function block: counter2’s value is:" + counter2);
foo();
counter2 = 5; //LINE 2: initializing a variable. Current value = 0

//Explain
//Counter 2 is not initialized nor assigned a value hence everything is undefined













