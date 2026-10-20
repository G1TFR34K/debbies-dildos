const yesButton = document.querySelector('#yes-button');
const noButton = document.querySelector('#no-button');
const actions = document.querySelector('#age-actions');
const feedback = document.querySelector('#feedback');
const finePrint = document.querySelector('.fine-print');

function showFeedback(message) {
  feedback.textContent = message;
  feedback.hidden = false;
  actions.hidden = true;
  finePrint.hidden = true;
  feedback.focus?.();
}

yesButton.addEventListener('click', () => {
  showFeedback('Age confirmation selected. This demo contains only the age-verification screen; no shop or product pages are included.');
});

noButton.addEventListener('click', () => {
  showFeedback('You must be 18 or older to enter. Access has not been granted.');
});
