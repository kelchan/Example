function maxMinAvg(arr){
    var max = arr[0]
    for (var i=1; i<arr.length; i++){
        if (max<arr[1]){
            max=arr[1]
    var min = arr[0]
        }
    }
    for (var i=1; i<arr.length; i++){
        if (min>arr[1]){
            min=arr[1]
        }
    }
    var Avg = 0
    for (var i=0; i < arr.length; i++){
        Avg + arr[0]
        Avg = Avg / arr.length
    }
}
var arrnew = [max,min,Avg]

function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    var arrnew = [max, min, avg];
    return arrnew;
}







function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    
}




var msg  = 'codingdojo'
for(var x=1; msg.length-3; x+=1)
{
    if(msg.length == 6)
    {
        for (var i=3; i<7; i++)
        {
            console.log(i);
        }
    }
    else
    {
        for (var i = msg.length; i > (msg.length - 2); i-=1)
        {
            console.log(i);
        }
    }
}



function lifeInWeeks(age) {
    var left = 90 - age;
    var weeks = left*52;
    var months = left*12;
    var days = left*365;
    console.log ("You have" + days + "days," + weeks + "weeks, and" + months + "months left." );

}
var age = 56



var msg = 'codingdojo';
for(var x=2; x<msg.length - 3; x=+1)
{
    if(msg.length ==7)
    {
        console.log(i)
    }
}

else

{
    for (var i = msg.length; i > (msg.length-3); i-=1)
{
    console.log(i);
}





//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(w,h){
    var bmi = Math.round(w / (h*h))
    return bmi
}
var bmi = bmiCalculator(65,1.8);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/



// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
function sumArr(arr) {
    var sum = 0;
    for( var i = 0; i < arr.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}



// Return the next highest prime number (JSChallenger)

function isItAPrimeNumber(a) {
    function prime(num) {
        for( var i = 2; i < num; i++ ) {
            if( num % i == 0 ) {
                return true;
            }
        }
    }
    function nextPrime(a) {
        let count = a + 1;
        while(prime(count)) {
            count++;
        }
        return count;
    }
    return prime(a) ? a : nextPrime(a) ;
}




// FizzBuzz

function FizzBuzz() {
    let arr = [];
    for ( let i = 1; i < 100; i++ ) {
        if ( i % 3 == 0 ) {
            arr.push( "Fizz" );
        }
        if ( i % 5 == 0 ) {
            arr.push( "Buzz" );
        }
        if ( i % 3 == 0 && i % 5 == 0 ) {
            arr.push( "FizzBuzz" );
        }
        else(
            arr.push(i);
        )
    }
    return arr;
}