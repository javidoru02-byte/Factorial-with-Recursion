function factorialWithRecursion(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialWithRecursion(num - 1);
}

const ANSWER = factorialWithRecursion(12);

console.log(ANSWER);
