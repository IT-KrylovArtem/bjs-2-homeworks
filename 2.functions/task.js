
function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
    if (arr.length === 0) {
      return 0;
  }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= min) {
        min = arr[i];  
      }
      if (arr[i] >= max) {
        max = arr[i];  
      }
        sum += arr[i];     
  }
  let result = sum / arr.length;
  let avg = Number(result.toFixed(2));
  return { min: min, max: max, avg: avg }; 
}
 
function summElementsWorker(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
   if (arr.length === 0) {
    return 0;
  }
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= min) {
     min = arr[i];  
    }
    if (arr[i] >= max) {
     max = arr[i];  
    }
     sum += arr[i];     
  }
    return sum;
}

function differenceMaxMinWorker(...arr) { 
  let max = -Infinity;
  let min = Infinity;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];  
    }        
    if (arr[i] <= min) {
         min = arr[i];  
       }        
    }  
   let differenceBetweenMaxAndMin = max - min;
return differenceBetweenMaxAndMin;
}


function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];   
    }      
    else if (arr[i] % 2 != 0) {
    sumOddElement += arr[i];
    }        
  }      
  let formula = sumEvenElement - sumOddElement;  
return formula;
}
    

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }  
  for (let i = 0; i < arr.length; i++) {  
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }       
}
  let dividingTheAmountAndQuantity = sumEvenElement / countEvenElement; 
  return dividingTheAmountAndQuantity;  
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {  
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
    maxWorkerResult =+ result;             
   }
 }
  return maxWorkerResult;
}

