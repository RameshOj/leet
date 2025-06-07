// Recursive function to find factorial of any given number.
// INPUT => 5
// Output => 120

const recursiveFactorial = (num) => {
  if (num === 0) return 1;
  return num * recursiveFactorial(num - 1);
};

console.log(recursiveFactorial(5));
