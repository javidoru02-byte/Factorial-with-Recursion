function factorialWithRecursion(num) {
  if (num !== 0 && !num) {
    return "Помилка: хиьний тип данних";
  }
  if (!Number.isInteger(num)) {
    return "Помилка:  значення має бути цілим";
  }
  if (num < 0) {
    return "Помилка: факторіал не може бути відємного числа";
  }
  if (num === 0) {
    return 1;
  }
  return num * factorialWithRecursion(num - 1);
}

const ANSWER = factorialWithRecursion(-1);

console.log(ANSWER);
