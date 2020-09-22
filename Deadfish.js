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
