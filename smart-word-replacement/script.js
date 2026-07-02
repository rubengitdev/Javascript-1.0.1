function myReplace(str, wordBeforeReplace, wordAfterReplace) {
  if (wordBeforeReplace[0] === wordBeforeReplace[0].toUpperCase()) {
    wordAfterReplace =
      wordAfterReplace[0].toUpperCase() + wordAfterReplace.slice(1);
  } else {
    wordAfterReplace =
      wordAfterReplace[0].toLowerCase() + wordAfterReplace.slice(1);
  }

  return str.replace(wordBeforeReplace, wordAfterReplace);
}
