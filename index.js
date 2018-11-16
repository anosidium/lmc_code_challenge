const fibonacci = (n) => {
	/**

	By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

	For example, the first ten Fibonacci numbers are:

	0, 1, 1, 2, 3, 5, 8, 13, 21, 34
	Write a function that accepts a number and returns the number at that position in the fibonnaci sequence.

	Once it works the tests will pass

	*/
	
	let fibonacciSequence = [0, 1, 1, 2];

	if (n > 3)
		for (let i = 4; i <= n; i++)
			fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);

	return fibonacciSequence[n];
}


const flatten = (list) => {
	/**

	Write a function that accepts a multi dimensional array and returns a flattened version.
	Example:
	[1, 2] becomes [1, 2]
	[1, [2]] becomes [1, 2]
	[1, [2, [3]]] beomes [1, 2, 3]
	[1, 2, [3, [4], 5, 6], 7] becomes [1, 2, 3, 4, 5, 6, 7]

	Once it works the tests will pass

	*/

	let flattenArray = [];

	for (let i = 0; i < list.length; i++) {
		if (list[i].length > 0) {
			for (let j = 0; j < list[i].length; j++) {
				if (list[i][j].length > 0)
					for (let k = 0; k < list[i][j].length; k++)
						flattenArray.push(list[i][j][k]);
				else
					flattenArray.push(list[i][j]);
			}
		} else {
			flattenArray.push(list[i]);
		}
	}

	return flattenArray;
}


const countLetters = (sequence) => {
	let counts = {};
	/**

	Write a function that counts the number of unique letters in a string
	and returns:

	Example:
	'AAA' becomes { A: 3 }
	'AAACT' becomes { A: 3, C: 2, T: 1 }
	'AAACTGGT' becomes { A: 3, C: 2, G: 2, T: 2 }

	Once it works the tests will pass
	*/

	let alphabets = [["A", 0],
					 ["B", 0],
					 ["C", 0],
					 ["D", 0],
					 ["E", 0],
					 ["F", 0],
					 ["G", 0],
					 ["H", 0],
					 ["I", 0],
					 ["J", 0],
					 ["K", 0],
					 ["L", 0],
					 ["M", 0],
					 ["N", 0],
					 ["O", 0],
					 ["P", 0],
					 ["Q", 0],
					 ["R", 0],
					 ["S", 0],
					 ["T", 0],
					 ["U", 0],
					 ["V", 0],
					 ["W", 0],
					 ["X", 0],
					 ["Y", 0],
					 ["Z", 0]];

	let letters = sequence.split("");

	for (let i = 0; i < alphabets.length; i++)
		for (let j = 0; j < letters.length; j++)
			if (letters[j] == alphabets[i][0])
				alphabets[i][1] += 1;

	for (let i = 0; i < alphabets.length; i++)
		if (alphabets[i][1] > 0)
			counts[alphabets[i][0]] = alphabets[i][1];

	return counts;
}


exports.countLetters = countLetters;
exports.fibonacci = fibonacci;
exports.flatten = flatten;
