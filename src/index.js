const randomNum = () => {
  return (Math.floor(Math.random() * 100));
}

const createSum = () => {
  let num1 = randomNum();
  let num2 = randomNum();
  correctAnswer = num1 + num2;
  document.getElementById('question').innerHTML = "";
  document.getElementById('question').innerHTML = (`${num1} + ${num2}`);
}

const checkAnswer = () => {
  let answer = document.getElementById('answer').value;
  console.log(answer);
  if (answer == correctAnswer) {
    return 'Correct. Well done!';
  }
  else {
    return 'Incorrect. Unlucky!';
  }
}

const showResult = (result) => {
  document.getElementById('solution').innerHTML = '';
  document.getElementById('solution').append(result);
}

let button = document.getElementById('submit');
button.addEventListener('click', () => {
  showResult(checkAnswer());
  document.getElementById('answer').value = "";
  createSum();
});


createSum();

