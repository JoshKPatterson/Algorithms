//This function will detect whether a string is a pangram, or a string that contains at least 1 of each letter
//
//9/02/2020

function isPangram(string){
  const s = string
  .replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+0-9]/g, '')
  .toLowerCase()
  const arr = s
    .split('')
    .filter(a => a !== ' ')
  let a = [];
  for(var i=0;i<arr.length;i++){
    if(!a.includes(arr[i])){
      a.push(arr[i])
    }
  }
  if(a.length === 26){
    return true;
  } else {
    return false;
  }
}
