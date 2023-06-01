const VOWELS_REGEX = /[euaio]/gi;

export default function reverseVowels(string) {
  if (string === '') {
    return '';
  }

  const allVowels = string.match(VOWELS_REGEX);
  if (!allVowels) {
    return string;
  }

  const reversedVowels = allVowels.reverse();
  const textList = string.split('');

  textList.forEach((letter, index) => {
    if (letter.match(VOWELS_REGEX)) {
      textList[index] = reversedVowels.shift();
    }
  });

  return textList.join('');
}
