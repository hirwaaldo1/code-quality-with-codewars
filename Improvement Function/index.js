// Exercise 1
export function calculateAverage(numbers) {
  return numbers.reduce((total, nextValue) => total + nextValue, 0) / numbers.length;
}

// Exercise 2
export function greet(name) {
  return name ? `Hello, ${name}!` : 'Hello!';
}

// Exercise 3
export function reverseString(string) {
  return [...string].reverse().join('');
}

// Exercise 4
export function findEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

// Exercise 5
export function calculateFactorial(number) {
  return number <= 1 ? 1 : number * calculateFactorial(number - 1);
}

// Exercise 6
export function maxNumber(...numbers) {
  return Math.max(...numbers);
}

// Exercise 7
export function multiply(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

// Exercise 8
export function discount(totalamount) {
  return totalamount > 100 ? totalamount * 0.1 : totalamount * 0.05;
}

// Exercise 9
export function calculateMatrixSum(matrix) {
  // The toString() method can be used to change a matrix array to a string without square brackets.
  return matrix.toString().split(',').reduce((total, nextValue) => total + Number(nextValue), 0);
}
