//This algorithm determines if a string is an isogram, or if it has no repeating characters. Will return true or false.
//
// 3/17/2020

function isIsogram(str){
    arr = str.toLowerCase().split('');
    console.log(arr)
    for(i = 0; i < arr.length; i++){
        let currentLetter = arr[i];
        let currentCount = 0;
        for(j = 0; j < arr.length; j++){
            if(currentLetter === arr[j]){
                if(currentCount > 1){
                    return false;
                } else {
                    currentCount++;
                    if(currentCount > 1){
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
