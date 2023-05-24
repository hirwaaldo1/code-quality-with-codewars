const ROMANNUMBERS = {
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
    const current = ROMANNUMBERS[romanArray[i]];
    const next = ROMANNUMBERS[romanArray[i + 1]];

    if (next > current) {
      result.push(next - current);
      romanArray.splice(i + 1, 1);
    } else {
      result.push(current);
    }
  }

  return result.reduce((a, b) => a + b, 0);
}
