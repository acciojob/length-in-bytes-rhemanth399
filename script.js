const byteSize = (str) => {
  // write your code here
	
  // Convert the string to a UTF-8 encoded byte array
  const byteArray = new TextEncoder().encode(str);
  
  // Return the length of the byte array
  return byteArray.length;
}

};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
