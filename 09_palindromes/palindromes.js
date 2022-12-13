const reverseString = function(string) {
    let temp = "";
    for(let i = 0; i < string.length; i++){
        temp = string.charAt(i) + temp;  
    }
    return temp;
};

const palindromes = function (prompt) {
    prompt = prompt.toLowerCase()
    for(let i = 0; i < prompt.length; i++){
        prompt = prompt.replace(' ', '')
        prompt = prompt.replace('!', '')
        prompt = prompt.replace('?', '')
        prompt = prompt.replace(',', '')
        prompt = prompt.replace('.', '')
        prompt = prompt.replace('-', '')
        prompt = prompt.replace(';', '')
        prompt = prompt.replace(':', '')
        prompt = prompt.replace('_', '')
    }
    prompt2 = reverseString(prompt)
    if(prompt2 == prompt){
        return true
    }
    return false
};

console
// Do not edit below this line

module.exports = palindromes;
