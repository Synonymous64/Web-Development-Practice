let go = "LETS GET STARTED WITH FUNCTIONS IN JAVASCRIPT";
console.log(go);
// the return value will store the output of this funciton to another variable
function add(a, b) {
    console.log("Adding two numbers");
    return a + b;
}
// Storing value to the variable
let p = add(4,5);
console.log(p);

// it won't able to store any such value to variable without return
function leapYear(a){
    if((a % 4 == 0 && a != 100) || a % 400 == 0){
        console.log(a + " is a leap year");
    }
    else {console.log(a + " is not a leap year")};   
}