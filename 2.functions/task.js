
function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  if (arr.length === 0) {
    return 0;
  }
    for (let i = 0; i < arr.length; i++) {
<<<<<<< HEAD
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

=======
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
>>>>>>> dc61ed95394a44f7d745ae1e9625bd943a7844d4

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
 
for (let i = 0; i < arr.length; i++) {
<<<<<<< HEAD

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
    
=======
  if (arr[i] % 2 === 0) {
  sumEvenElement += arr[i];   
  } else if (arr[i] % 2 != 0) {
  sumOddElement += arr[i];
   }        
  }      
  let formula = sumEvenElement - sumOddElement;  
  return formula; 
}
>>>>>>> dc61ed95394a44f7d745ae1e9625bd943a7844d4

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }  
<<<<<<< HEAD
  for (let i = 0; i < arr.length; i++) {

  
=======
  for (let i = 0; i < arr.length; i++) {  
>>>>>>> dc61ed95394a44f7d745ae1e9625bd943a7844d4
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }       
<<<<<<< HEAD
}
  let dividingTheAmountAndQuantity = sumEvenElement / countEvenElement; 
  return dividingTheAmountAndQuantity;
  
=======
  }
  let dividingTheAmountAndQuantity = sumEvenElement / countEvenElement; 
  return dividingTheAmountAndQuantity;  
>>>>>>> dc61ed95394a44f7d745ae1e9625bd943a7844d4
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
<<<<<<< HEAD
 
for (let i = 0; i < arrOfArr.length; i++) {
  
  const result = func(...arrOfArr[i]);
   
  if (result > maxWorkerResult) {
    maxWorkerResult =+ result;
  
              
  }
   
}
return maxWorkerResult;
}

 
function inputArray (...arr) {
  
}
=======
  for (let i = 0; i < arrOfArr.length; i++) { 
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
    maxWorkerResult =+ result;               
    }     
  }
  return maxWorkerResult;
}
>>>>>>> dc61ed95394a44f7d745ae1e9625bd943a7844d4
