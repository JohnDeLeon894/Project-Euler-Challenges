
    "use strict";


    var primeFactors = [];
    var factors = [];

function isPrimeFactor(num) {

    for (var i=2; i <= num ; i++) {
        if(num % i === 0 ){
            factors.push(i);
            //console.log("end finding factors");
            if(isPrime(i)){
                console.log(i + ' is Prime');
                primeFactors.push(i);
                setTimeout(function () {}, 100);
            }
        }

        // factors.forEach(isPrime());

    }
    // console.log(primeFactors);
    var arrLength= (primeFactors.length) -1;
    return primeFactors[arrLength];
   // return primeFactors.join(',');

}

function isPrime(item, index, array){
    var isTrue = true;
    for(var i=2; i < item; i++){
        if (item % i === 0){
            setTimeout(function () {}, 100);
            console.log(i);
            return false;
        }
    }
    setTimeout(function () {}, 100);
    console.log(i + " true");
    return isTrue;
}

//console.log(isPrimeFactor(13195));

let num = prompt("what number do you want to find the largest prime factor for?");

alert("The largest prime factor:" + (isPrimeFactor(num)) );


/*


    function findPrimeFactors (num) {

        var primeFactors = [];
        while (num % 2 === 0) {
            primeFactors.push(2);
            num = num / 2;
        }

        var sqrtNum = Math.sqrt(num);
        for (var i = 3; i <= sqrtNum; i++) {
            while (num % i === 0) {
                primeFactors.push(i);
                num = num / i;
            }
        }

        if (num > 2) {
            primeFactors.push(num);
        }
        return primeFactors;
    }

    console.log(findPrimeFactors(10)); // [2, 5]
    console.log(findPrimeFactors(11)); // [11]

*/
