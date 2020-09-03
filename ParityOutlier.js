//This algorithm will take an array of all-but-one odd or even numbers and return the outlier.
//
//9/03/2020

function findOutlier(integers){
  //Determine if all but one are odd or even
  //If after for loop, check is positive, numbers are even - if check is negative, numbers are odd
  
  //Set check value to 0
  let check = 0;
  //Check first 3 numbers for even or odd
  for(var i = 0; i < 3; i++){
    //Use modulo operator to see if number divides evenly, for even number
    if(Math.abs(integers[i]) % 2 == 0){
      //If even, increment check by 1
      check++
    } else {
      //If odd, decrement check by 1
      check--
    }
  }
  //If check is greater than 0, all but 1 number is even, so check for odd
  if(check > 0){
    for(var i = 0; i < integers.length; i++){
      if(Math.abs(integers[i]) % 2 == 1){
        return integers[i]
      }
    }
  } 
  //If check is less than 0, all but 1 number is odd, so check for even
  else {
    for(var i=0; i< integers.length; i++){
      if(Math.abs(integers[i]) % 2 == 0){
        return integers[i]
      }
    }
  } 
}
