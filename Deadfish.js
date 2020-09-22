<<<<<<< HEAD
//This algorithm will parse and run Deadfish
//
// 9/14/2020

function parse( data )
{
  let instructions = data.split('');
  let num = 0;
  let returnArr = [];
  instructions.forEach((char) => {
    switch (char){
        case 'i':
          num++;
          break;
        case 'd':
          num--;
          break;
        case 's':
          num = Math.pow(num, 2);
          break;
        case 'o':
          returnArr.push(num);
          break;
        default:
          break;
    }
  });
  return returnArr;
}
=======
//This algorithm will parse and run Deadfish
//
// 9/14/2020

function parse( data )
{
  let instructions = data.split('');
  let num = 0;
  let returnArr = [];
  instructions.forEach((char) => {
    switch (char){
        case 'i':
          num++;
          break;
        case 'd':
          num--;
          break;
        case 's':
          num = Math.pow(num, 2);
          break;
        case 'o':
          returnArr.push(num);
          break;
        default:
          break;
    }
  });
  return returnArr;
}
>>>>>>> 1ebf79311f1f5b274079395590a84ae5f11a7f9b
