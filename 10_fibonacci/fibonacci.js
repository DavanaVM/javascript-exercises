const fibonacci = function(number) {
    let i = 0;
    fib = [1]
    if(number < 1){
        return "OOPS"
    }

    for(i = 1; i < parseInt(number) - 1; i++){
        if(i == 1){
            fib.push(1)
        }
        fib.push(fib[i] + fib[i - 1])
    }
    if(number == 2 || number == 1){
        return 1;
    }

    return fib[i]
};

// Do not edit below this line
module.exports = fibonacci;
