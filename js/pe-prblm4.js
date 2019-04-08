"use strict";
/*
*PROBLEM 4
* PE Palendrome problem.
*find largest palendrome number from the product of 3 digits.
*The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
* plan of attack:
* I will start from the highest possible 2/3digit summation combo and work backwards
* a function will convert the sum to strings and compare the result from the inside out
* if the digits do not match, the function will continue to run
* if the digits do match, the function will return the sum and stop running.
*
*
* */

// confirm("press either button to begin script");



// global variables
var num1=0;
var num2=0;
var digArray = [];
//rando num for testing
var rando1000 = Math.floor(Math.random()*10000 + 1);

/*
Found a better way.
// function to seperate the number for comparison purposes
function intSeparator(int) {
    var sInt = int.toString();
    var x = sInt.length;
    var digArray = [];
    var rebDigArray = [];
    var halfX = Math.floor(x/2);                        // may not be needed
    console.log(sInt + " is " + x + " digits long.");
    for (var i = 0; i < x ; i++){
         var intDig = sInt.charAt(i);
         digArray.push(intDig);
    }
    console.log(digArray);
}*/

// function for math operation. Main function to get sum. Will call functions to seperate the numbers and make the comparisons
function sumLoop(){
    num1 = 999;
    num2 = 999;
    for(num1; num1 >100; num1-- ){
        for(num2; num2 > 100; num2--){
            var sum = num1*num2;
            // console.log(num1 + " * " + num2 + " = " + sum);
            if (spltRevJoin(sum)){
                console.log(num1 + " * " + num2 + " = " + sum);
                digArray.push(sum);
                console.log(digArray);

            }

        }
        console.log("Moved through and entire 899 iterations of num2!!! ('O') ");
        num2 = 999;
    }
    digArray = digArray.sort(function(a, b){return a - b});
    console.log(digArray[digArray.length - 1]);
    return digArray[digArray.length - 1];

}

function spltRevJoin(input) {

    var str =input.toString();                   //change all letters to lowercase
    var spltStrng = str.split("");         //splits string into array
    var rvrseArray = spltStrng.reverse();           // reverses array
    var rvrseStrng = rvrseArray.join('');           //joins reversed array to reverse string

    if(str===rvrseStrng) {
        console.log(str + rvrseStrng);
        return true;
    }
    return false;
}

 // intSeparator(rando1000);
sumLoop();