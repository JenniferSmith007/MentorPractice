function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(let i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

// turn numbers into string with a phonenumber format 
//practice on my own 