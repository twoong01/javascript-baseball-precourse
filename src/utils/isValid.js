function isValid(userInput) {
  if (userInput.length != 3) {
    return false;
  }
  if (userInput.includes(0)) {
    return false;
  }
  if (new Set(userInput).size != 3) {
    return false;
  }
  if (Number.isNaN(Number(userInput))) {
    return false;
  }
  return true;
}

export default isValid;
