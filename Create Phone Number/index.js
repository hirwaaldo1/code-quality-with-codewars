function toString(numbers) {
  return numbers.join("");
}

function createPhoneNumber(numbers) {
  const areaCode = toString(numbers.slice(0, 3));
  const prefix = toString(numbers.slice(3, 6));
  const lineNumber = toString(numbers.slice(6));

  return `(${areaCode}) ${prefix}-${lineNumber}`;
}
