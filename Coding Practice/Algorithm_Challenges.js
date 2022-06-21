// Get 1 to 255
function get_array(){
    var arr = [];
    for (var i=1; i <= 255; i++)
    arr.push(i)
    return arr;
}



// Get even 1000
function sum_even_numbers(){
    var sum = 0
    for (var i=1; i<1001; i++){
        if (i%2===0){
            sum+=i;
        }
    }
    return sum;
}



// Sum odd 5000
function sum_odd_5000(){
    var sum = 0;
    for (var i+1; i<=5000; i++){
        if (i%2===1){
            sum=sum+i;
        }
    }
    return sum;
}



// Iterate an array
function iterArr(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}



// Find max
function findMax(arr){
    var max = arr[0]
    for (var i=1;ll i<arr.length; i++){
        if (max < arr[i]){
            max = arr[i]
        }
    }
    return max;
}



// Find average
function findAvg(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum = sum+arr[i]
    }
    return sum/arr.length;
}



// Array odd
function oddNumbers(){
    var arr = [];
    for (var i=1; i<=50; i++){
        if (i%2==1){
            arr.push(i)
        }
    }
    return arr;
}



// Greater than Y
function greaterY(arr,Y){
    var count = 0
    for (var i=0; i<arr.length; i++){
        if (arr[i]>Y){
            count = count + 1
        }
    }
    return count;
}



// Squares
function squareVal(arr){
    for (var i=0; i<arr.length; i++){
        arr[i] = arr[i]*arr[i]
    }
    return arr;
}



// Negatives
function noNeg(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]=0
        }
    }
    return arr;
}



// Max/Min/Avg
function maxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i=1; i < arr.length; i++){
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



// Swap values
function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    return arr;
}



// Number to string
function numToStr(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo"
        }
    }
    return arr;
}



// Two Sum
function TwoSum(arr[], target){
    for (var i=0; i<arr.length; i++){
    for (var x=i+1; x<arr.length; x++){
        var sum = target - arr[i];
        if (arr[x] == sum){
            return (i,x);
        }
    }
}





function myFunction(a, b) {
    if a.includes(b) {
        return (b + a);
        return (a +b);
    }
}