const numero = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let vidas

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  tentativas++;

  if (isNaN(guess)) {
    setMessage("Digite um número válido.");
  } else if (guess === numero) {
    setMessage(`Parabéns! Você acertou em ${tentativas} tentativas.`);
    disableInputAndButton();
  } else if (guess < numero) {
    setMessage(`Tente um número maior que ${guess}.`);
  } else {
    setMessage(`Tente um número menor que ${guess}.`);
  }
}

function setMessage(message) {
  document.getElementById("message").textContent = message;
}

function disableInputAndButton() {
  document.getElementById("guess").disabled = true;
  document.getElementsByTagName("button")[0].disabled = true;
}
