const ROMANS = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(number) {
  let result = "";

  for (const symbol in ROMANS) {
    const value = ROMANS[symbol];
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }

  return result;
}
