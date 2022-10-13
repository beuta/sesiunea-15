function sum(number1, number2) {
    return number1 + number2;
}

let result = sum(3 , 1);
console.log(result);

let sumFunction = function(number1, number2) {
    return number1 + number2;
}

let result2 = sumFunction(1,2);
console.log(result2);

let arrowFunction = (number1, number2) => {
    return number1 + number2;
}

let result3 = arrowFunction(5,6);
console.log(result3);

console.log(arrowFunction(5,6));
let shortArrowFunction = (number1, number2) => number1 + number2 ;


//let var1 = 1, var2 = false, var3 = 'ceva';