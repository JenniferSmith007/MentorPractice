function sameNum (){
  let arr1 = [1,2,3,4,5];
  let arr2 = [2,9,6,7,8];
  let sameNumArray = [];

  for (let x = 0; x < arr1.length; x++){
    for (let q = 0; q < arr2.length; q++){
      if (arr1[x] == arr2[q]){
        sameNumArray.push(arr2[q]);
        return `${arr1} and ${arr2} both have ${sameNumArray}`;
      }
    }
  }

}
sameNum();
//prints out : 2 //

// practice on own 