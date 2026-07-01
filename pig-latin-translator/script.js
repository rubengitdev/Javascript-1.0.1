function translatePigLatin(str) {
  if (/^[aeiou]/.test(str)) {
    return str + "way";
  }

  const firstVowel = str.search(/[aeiou]/);

  if (firstVowel === -1) {
    return str + "ay";
  }

  return str.slice(firstVowel) + str.slice(0, firstVowel) + "ay";
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("rhythm"));
