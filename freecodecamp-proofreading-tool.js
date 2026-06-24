// In this lab, you will build a proofreading tool that analyzes arrays of words for palindromes and repeated phrases.
// A palindrome is a word that reads the same forwards and backwards. For example, "racecar" and "level" are palindromes, but "hello" is not.
// A phrase is a sequence of consecutive words. For example, in ["the", "cat", "sat", "the", "cat"],
// the phrase "the cat" (a sequence of 2 words) appears at positions 0 and 3.

// word is a string argument
function isPalindrome(word) {
  // if the word reads the same forward and backward, return true. Otherwise, false
  word = word.toLowerCase();
  const strWord = word.length;

  for (let i = 0; i < strWord / 2; i++) {
    // comparing char from the start and matching them with the char from the back
    if (word[i] !== word[strWord - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));

// words is array argument
function findPalindromeBreaks(words) {
  const breaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) return [];

  const map = new Map();
  const result = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join("|");

    if (!map.has(phrase)) {
      map.set(phrase, [i]);
    } else {
      map.get(phrase).push(i);
    }
  }

  for (const indices of map.values()) {
    if (indices.length > 1) {
      result.push(...indices);
    }
  }

  return result.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];

    result.push({
      repeatedPhrases: findRepeatedPhrases(text, phraseLength),
      palindromeBreaks: findPalindromeBreaks(text),
    });
  }
  return result;
}
