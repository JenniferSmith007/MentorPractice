
function smallestNum(ranNum) {
  let result; 
  for (let i = 0; i < ranNum.length; i++){
    if (ranNum[i] < result || result === undefined) {

      result = ranNum[i];
    }
  }
  return result;
}
console.log(smallestNum([1, 2, 3, 4, 5, 6, -1]));
// -------------------------------------------------------------------------------

// is prime 

function isPrime(num) {
  let result = true;
  for (let x = 2; x < num; x++){
    if (num % x === 0) {
      result = false;
      
    }
   }
  return result;
}
console.log(isPrime(5));

// -------------------------------------------------

function word(str) {
  let result = ``;
  for (let x = str.length - 1; x >= 0; x--){
    result += str[x];
  }
  return result;
}
console.log(word(`sarah`));
// did with mentor 