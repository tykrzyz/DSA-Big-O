//11. I could not figure this one out but found this code on the internet. I am dumfounded

function stepsToSolveHanoiT(height, srcP, desP, bufferP) {
  if (height >= 1) {
  
    // Move a tower of height-1 to the buffer peg, using the destination peg.
    stepsToSolveHanoiT(height - 1, srcP, bufferP, desP);
  
    // Move the remaining disk to the destination peg.
    console.log('Move disk from Tower ', srcP, ' to Tower ', desP);
  
    // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
    stepsToSolveHanoiT(height - 1, bufferP, desP, srcP);
  }
    
  return;
}

//After 7 calls with a tower of 5
/*
    
   
                           --
 --------                 ----
----------               ------    

7 for 3 disks
15 for 4
31 for 5

O(nlogn)


*/


//12

function countingSheep(num){
  for(let i = num; i > 0; i--){
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log('All sheep jumped over the fence');
}
//Recursive: O(n) Iterative: O(n)

function powerCalculator(base, exp){
  if(exp < 0){
    return 'Exponent should be >= 0';
  }

  return base**exp;
}

//Recursive: O(n) Iterative: O(1)

function reverseString(string){
  let newString = '';
  for(let i = string.length-1; i >= 0; i--){
    newString += string.charAt(i);
  }
  return newString;
}

//Recursive: O(n) Iterative: O(n)

function nthTriangleNum(num){
  let sum=0;
  for(let i = 1; i <= num; i++){
    sum += i;
  }
  return sum;
}

//Recursive: O(n) Iterative: O(n)

function stringSplitter(input, split){
  let index = 0;
  let splitString = [''];
  for(let i = 0; i < input.length; i++){
    if(input.charAt(i)===split){
      index++;
      splitString[index] = '';
    }
    else{
      splitString[index] += input.charAt(i);
    }
  }
  return splitString;
}

//Recursive: O(n^2) Iterative: O(n)

function fibonacci(n){
  let previousValue = 1;
  let currentValue = 1;
  let temp;
  for(let i = 1; i <= n; i++){
    if(i === 1 || i === 2){
      currentValue = 1;
    }
    else{
      temp = previousValue;
      previousValue = currentValue;
      currentValue += temp;
    }
  }
  return currentValue;
}

//Recursive: O(n) Iterative: O(n)

function factorial(n){
  let value = 1;
  for(let i = 1; i <= n; i++){
    value *= i;
  }
  return value;
}

//Recursive: O(n) Iterative: O(n)