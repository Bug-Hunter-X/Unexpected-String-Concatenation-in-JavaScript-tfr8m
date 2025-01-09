function myFunction(a, b) {
  // Ensure both a and b are numbers
  a = Number(a);
  b = Number(b);

  // Check for NaN (Not a Number)
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Operands must be numbers";
  }

  return a + b;
}

console.log(myFunction(5, '5')); // Output: 10
console.log(myFunction('hello',5)); // Output: Invalid input: Operands must be numbers