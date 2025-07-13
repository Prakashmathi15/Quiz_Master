const correctAnswers = [
  "HyperText Markup Language",
  "number",
  "const"
];


function calculateScore(callback) {
  const userAnswers = [
    document.getElementById('q1').value,
    document.getElementById('q2').value,
    document.getElementById('q3').value
  ];
  return callback(userAnswers, correctAnswers);
}


function strictScoring(userAnswers, correctAnswers) {
  let score = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score++;
    }
  }
  return score;
}





function handleScoring(callback) {
  const finalScore = calculateScore(callback);
  document.getElementById('scoreDisplay').textContent =
    'Your Score: ' + finalScore + ' / ' + correctAnswers.length;
}
