// for loop

// given an array of numbers, find the largest number in the array.

//array [2,3,1]

function findMax(arr) {
  let max = Number.NEGATIVE_INFINITY; // 
  for (let x = 0; x < arr.length; x++){
    let num = arr[x]; // num = arr[2] starting at the top of array. 
    if (num > max) {
       max = num;  // take the max var and = to num. 
    }
    
  }
  return max;
}
console.log(findMax([2, 3, 1,4]));
findMax([2, 3, 1]);

// using reduce method vv

function findNum(arr)
{ return arr.reduce((cumm, curr) => { return Math.max(cumm, curr) }, Number.NEGATIVE_INFINITY) }


// Algo went over with Mentor 