  
//This algorithm will take a string and return it with all words larger than [limit] reversed
//
//3/22/2020

function spinWords(string){
    let limit = 5;
    let arr = string.split(' ');
    arr.forEach(function(word){
        if(word.length >= limit){
        let wordArr = word.split('');
        let reverseWord = [];
        wordArr.forEach((letter) => reverseWord.unshift(letter));
        reverseWord = reverseWord.join('');
        arr[arr.indexOf(word)] = reverseWord;
        };
    });
    return arr.join(' ');
  };
