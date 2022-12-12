const removeFromArray = function(array, ...number) {
    for(let i = 0; i < number.length ; i++){
    console.log(number[i])
    index = array.indexOf(number[i])
    if(index == -1){

    }else{
    array.splice(index, 1)
    }   
}
    return array;
};
// Do not edit below this line
module.exports = removeFromArray;
