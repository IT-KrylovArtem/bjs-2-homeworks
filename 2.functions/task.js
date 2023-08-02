function getArrayParams(...arr) {
let max = 0;
let min = 0;
let sum = 0;
let count = 0;
for (i = 0; i < arr.length; i++) {
  count ++;
      if ( arr[i] < min) {
        min = arr[i];
       
      }
     
      if ( arr[i] > max) {
        max = arr[i];
       sum += arr[i];  
      }
          
     let avg = ((min + max + sum) / count);
     let roundingUpToTwo = Number(avg.toFixed(2));
    }
                
    return { min: min, max: max, avg: avg };
    
  }
  
  

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}

function inputArray (...arr) {

}