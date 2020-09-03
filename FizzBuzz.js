//This algorithm will count to 100, every multiple of 3 will print 'fizz', every multiple of 5 will print 'buzz', and every
//multiple of 15 will print 'fizzBuzz'
//
//3/10/2020

const fizzBuzz = function(){
    for(i = 1; i < 101; i++){
        if(Number.isInteger(i/15)){
            console.log('fizzBuzz')
        } else if(Number.isInteger(i/3)){
            console.log('fizz')
        } else if(Number.isInteger(i/5)){
            console.log('buzz')
        } else {
        console.log(i);
        }
    }
}
