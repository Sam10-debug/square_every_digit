// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//my solution

function squareDigits(num){
	//convert the integer to string
	//loop through the string , convert each element to a number then square it 
	//add them to an array, then convert the array to a string of concatenated dnumbers
	let newNum
	const str= num+""
	const arr=[]
	for (let i=0;i<str.length; i++){
		arr.push((+str[i])**2)
	}
	newNum= arr.join('')
  return +newNum
   
  }