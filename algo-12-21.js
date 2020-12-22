function anagram(str1, str2) {
  let result = true;
  for (let x = 0; x < str1.length; x++){
     let doesContain = false;
    for (let i = 0; i < str2.length; i++){
      if (str1[x] === str2[i]) {
        doesContain = true;
      }
     
      
    }
    result = result && doesContain;
  }
  return result;
}
console.log(anagram(`fired`, `fried`));

