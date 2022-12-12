const sumAll = function(number1, number2) {
    let sol = number2
    if(typeof(number1) != typeof(number2) || number1 < 0 || number2 < 0){
        return "ERROR"
    }
    if(number1 > number2){
        number2 = number1;
        number1 = sol;
    }
    sol = 0;
    for(number1 ;number1 <=number2 ; number1++){
        sol += number1
    }
    
    return sol;
};

// Do not edit below this line
module.exports = sumAll;
