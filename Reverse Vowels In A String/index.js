const VOWELS_REGEX = /[aeiou]/gi;

export default function reverseVowels(string) {
  if (string === '') {
    return '';
  }

  const allVowels = string.match(VOWELS_REGEX);
  if (!allVowels) {
    return string;
  }

  const reversedVowels = allVowels.reverse();
  const textList = [...string];

  // eslint-disable-next-line unicorn/no-array-for-each
  textList.forEach((letter, index) => {
    if (VOWELS_REGEX.test(letter)) {
      textList[index] = reversedVowels.shift();
    }
  });

  return textList.join('');
}
