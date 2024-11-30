function firstNonRepeatedChar(str) {
 // Write your code here
	let count = {}

	for (let i = 0; i < str.length; i++) {
		let char = str[i]

		if(count[char])
		{
			count[char]++;
		}

		else
		{
			count[char]=1;
		}
	}

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (count[char]===1) 
		{
			return char;
		}	
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
