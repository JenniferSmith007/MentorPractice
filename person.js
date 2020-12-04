// create a person object 
// first name 
// last name 
// age 
// gender 
// create one class to use 

function Person (firstName,lastName,age,gender){
  this.name = firstName.concat(lastName);
  this.age = age;
  this.gender = gender;
  this.hobbies = ``;
}
Person.prototype.addHobbie = function (hobby) {
  // this.hobbies += `reading, writting`;
  this.hobbies += hobby;
  
}
// ^^ function without name anon function 
// ^^ using the addHobbie anon function is saving memory. 

let jennifer = new Person(`jennifer`, ` Smith`, 25, `female`);
console.log(jennifer);

let bob = new Person(`bob`, ` doe`, 100, `male`);
console.log(bob);
bob.age = 101;
console.log(bob);
bob.addHobbie(`skating`);
console.log(bob);

//done with Mentor. 