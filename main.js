const timeForm = document.getElementById('timeForm');
const optimisticNumber = document.getElementById('optimisticNumber');
const possibleNumber = document.getElementById('possibleNumber');
const pessimisticNumber = document.getElementById('pessimisticNumber');
const formBtn = document.getElementById('formBtn');

let optimisticValue = null,
    possibleValue = null,
    pessimisticValue = null,
    formulaAns = null;

formBtn.addEventListener('click', function(event) {
  optimisticValue = optimisticNumber.value;
  possibleValue = possibleNumber.value;
  pessimisticValue = pessimisticNumber.value;

  formulaAns = (Number(optimisticValue) + (4 * possibleValue) +
      Number(pessimisticValue)) / 6;
  formulaAns = Math.round(formulaAns);

  document.body.removeChild(timeForm);
  const answerArea = document.createElement('div');
  answerArea.classList.add('form');
  document.body.append(answerArea);

  const answer = document.createElement('div');
  answer.classList.add('input__area');
  answerArea.append(answer);
  formulaAns > 1 ?
      answer.innerHTML = `${formulaAns} hours` :
      answer.innerHTML = `${formulaAns} hour`;
});
