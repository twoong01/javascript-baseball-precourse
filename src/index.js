import isValid from './utils/isValid.js';
import generateRandomNumbers from './utils/randomNumbers.js';

class baseBallGame {
  constructor() {
    this.submitButton = document.getElementById('submit');
    this.userInput = document.getElementById('user-input');
    this.computerNumber = generateRandomNumbers();
  }

  checkButtonPressed() {
    this.submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      const userInput = this.userInput.value;
      if (isValid(userInput)) {
        return userInput;
      }
      alert('잘못된 값을 입력했습니다.');
    });
  }
}

const b = new baseBallGame();
b.checkButtonPressed();
