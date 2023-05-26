const ROMAN_NUMBERS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function solution(roman) {
  const result = [];
  const romanArray = roman.split("");

  for (let i = 0; i < romanArray.length; i++) {
    const current = ROMAN_NUMBERS[romanArray[i]];
    const next = ROMAN_NUMBERS[romanArray[i + 1]];

    if (next > current) {
      result.push(next - current);
      // remove next element if it's already added
      romanArray.splice(i + 1, 1);
    } else {
      result.push(current);
    }
  }

  return result.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
