//This algorithm will take a string and return a reversed version of the string
//
//3/17/2020

function reverse(str) {
    let arr = str.split('');
    let returnArr = [];
    arr.forEach(char => returnArr.unshift(char));
    return returnArr.join()
}
