//This algorithm will take an array of 10 single-digit numbers and return them in a phone number format (xxx) xxx-xxxx
//
//3/17/2020

function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return `(${numbers.substring(0,3)}) ${numbers.substring(3,6)}-${numbers.substring(6)}`
};
