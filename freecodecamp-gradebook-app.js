function getAverage(arrScore) {
  if (arrScore.length === 0) {
    return 0;
  }
  let average = 0;

  for (let i = 0; i < arrScore.length; i++) {
    average += arrScore[i];
  }

  return average / arrScore.length;
}

function getGrade(studentScore) {
  if (studentScore === 100) {
    return "A+";
  } else if (studentScore >= 90) {
    return "A";
  } else if (studentScore >= 80) {
    return "B";
  } else if (studentScore >= 70) {
    return "C";
  } else if (studentScore >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(isPassingGrade) {
  return getGrade(isPassingGrade) !== "F";
}

function studentMsg(arrScore, studentScore) {
  // we need variable to store average, grade, and passed
  const average = getAverage(arrScore);
  const score = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);

  if (passed) {
    return `Class average: ${average}. Your grade: ${score}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${score}. You failed the course.`;
  }
}
