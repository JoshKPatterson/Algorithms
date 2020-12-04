//This algorithm will reverse the order of an array of bytes while maintaining the bytes
//
// 9/14/2020

function dataReverse(data) {
  let reverse = [];

  for(var i = 0; data.length > 0 / 8; i++){
    reverse.unshift(data.splice(0,8))
  }
  
  let returnData = [].concat.apply([], reverse);
  return returnData;
