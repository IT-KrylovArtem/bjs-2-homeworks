"use strict";

function solveEquation(a, b, c) {
let arr = [];
const discriminant = b**2-4*a*c;
  if (discriminant < 0) {
  return arr;
} else if (discriminant === 0) {
  const root = -b/(2*a);
  arr.push(root);
} else if (discriminant > 0) {
  const root1 = (-b + Math.sqrt(discriminant) )/(2*a);
  const root2 = (-b - Math.sqrt(discriminant) )/(2*a);
  arr.push(root1, root2);
}  
return arr;
}
function calculateTotalMortgage(percent, contribution, amount, countMonths) { 
  const monthRate = (percent / 100) / 12;
  const loanBody = amount - contribution;
  const monthlyPaymentFormula = loanBody * (monthRate + (monthRate / (((1 + monthRate) ** countMonths) - 1)));
  const totalAmount = monthlyPaymentFormula * countMonths;   
  const roundingUpToTwo = Number(totalAmount.toFixed(2));
return percent, contribution, amount, countMonths, roundingUpToTwo;  
}

  let result = calculateTotalMortgage(10, 0, 50000, 12);
  let result1 = calculateTotalMortgage(10, 1000, 50000, 12);
  let result2 = calculateTotalMortgage(10, 0, 20000, 24);
  let result3 = calculateTotalMortgage(10, 1000, 20000, 24);
  let result4 = calculateTotalMortgage(10, 20000, 20000, 24);
  let result5 = calculateTotalMortgage(10, 0, 10000, 36);
  let result6 = calculateTotalMortgage(15, 0, 10000, 36);
  