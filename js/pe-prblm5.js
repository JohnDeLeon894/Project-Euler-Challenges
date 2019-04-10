/*Smallest multiple

Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/



var divArray= [];

function smallestMultiple(int) {
    var x = int;
    // var y= 1;

    // var z = int;
    // for( z; z>1; z-=1){
    //     y = z + y;
    // }
    // console.log(y);

    // var z=0;
    // var trueth= false;

        for (var i = 1; i < 1000000000 ; i++ ){
            while (divider(i, x)){
                // console.log("x is " + x);
                if (x===1) {
                    return i;
                }
                x--;
            }
             x=int;
            // console.log("trying again with " + i);
        }

}

function divider(int1, int2){
     var rtrn = int1 % int2;
     // console.log(rtrn);
     if (rtrn === 0){
         return true;
     }
     return false;

}


/*********************************************
var num = 1;
var isDivisible = false;
var startTime = (new Date().getTime());

while (!isDivisible) {
    for (var i = 20; i > 1; i--) {
        if (num % i !== 0) {
            isDivisible = false;
            num = num + (i + 1);
            break;
        }
        else {
            isDivisible = true;
        }
    }
}

console.log(num);
console.log("Finished in " + (((new Date().getTime()) - startTime) / 1000) + " seconds");
 *********************************************/