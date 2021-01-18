const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');

/*
const highScores = localStorage.setItem('highScores', JSON.stringify([]));
console.log(JSON.parse(localStorage.getItem('highScores')));
*/

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

const MAX_HIGH_SCORES = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
})

saveHighScore = e => {
  console.log(e);
  e.preventDefault();
  
  const score = {
    score: Math.floor(Math.random() * 900),
    name: username.value
  };
  
  highScores.push(score);
  
  highScores.sort((a,b) => b.score - a.score);
  
  highScores.splice(5);
  
  localStorage.setItem('highScores', JSON.stringify(highScores));

  window.location.assign('/');
}