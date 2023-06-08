export function flattenNestedArray(array) {
  let level = 0;

  const checkNesting = (currentArray, currentLevel) => {
    if (!Array.isArray(currentArray)) return;

    level = Math.max(level, currentLevel);

    for (const item of currentArray) {
      checkNesting(item, currentLevel + 1);
    }
  };

  checkNesting(array, 0);
  return array.flat(level);
}

export function numberToBinary(number) {
  return number.toString(2);
}

export function recursiveSum(array) {
  if (array.length === 0) return 0;
  return array[0] + recursiveSum(array.slice(1));
}

export function removeArrayDuplicates(array) {
  return [...new Set(array)];
}

export function checkPrime(number) {
  if (number <= 1) return false;

  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) return false;
  }

  return true;
}
