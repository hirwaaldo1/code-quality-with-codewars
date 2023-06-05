const ROMAN_NUMBERS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export default function solution(roman) {
  const result = [];
  const romanArray = [...roman];

  for (let index = 0; index < romanArray.length; index++) {
    const current = ROMAN_NUMBERS[romanArray[index]];
    const next = ROMAN_NUMBERS[romanArray[index + 1]];

    if (next > current) {
      result.push(next - current);
      // remove next element if it's already added
      romanArray.splice(index + 1, 1);
    } else {
      result.push(current);
    }
  }

  return result.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
