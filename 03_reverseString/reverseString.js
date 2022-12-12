const reverseString = function(string) {
    let temp = "";
    for(let i = 0; i < string.length; i++){
        console.log(string.charAt(i))
        temp = string.charAt(i) + temp;  
    }
    return temp;
};

// Do not edit below this line
module.exports = reverseString;
