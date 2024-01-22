
      // Empezamos por declarar las variables para almacenar los datos 

      let randomNumber = Math.floor(Math.random() * 100) + 1;    

      const guesses = document.querySelector(".guesses");                  
      const lastResult = document.querySelector(".lastResult");
      const lowOrHi = document.querySelector(".lowOrHi");

      const guessSubmit = document.querySelector(".guessSubmit");
      const guessField = document.querySelector(".guessField");

      let guessCount = 1;
      let resteButton;

      guessField.focus();

      // Creamos una funcion que contenga las condicionales que necesitaremos en el juego

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1){
    guesses.textContent = "Intentos anteriores: ";
    }

    guesses.textContent +=userGuess + "";

  if (userGuess === randomNumber){
    lastResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    
    setGameOver();
  } else if (guessCount === 10){
lastResult.textContent = "¡¡¡ Fin del juego!!!"

setGameOver();
  } else{
  lastResult.textContent = "!Incorrecto!";
  lastResult.style.backgroundColor = "red";
  
  if (userGuess < randomNumber) {
    lowOrHi.textContent = "! El numero es muy pequeño !";
  } else if (userGuess > randomNumber) {
    lowOrHi.textContent = "¡ El numero es muy grande !";
  }
}

//Agregamos 1 al turno del jugador, ponemos en blanco el campo y lo enfocamos

guessCount++;
guessField.value = "";
guessField.focus();
}

//Agregamos un EvenListener para programar las funciones que hara el evendo del boton al hacer click sobre el

guessSubmit.addEventListener("click", checkGuess);

/*Creamos la siguiente funcion para desabilitar el campo de texto y el boton, para impedir que el usuario siga introduciendo valores
tambien creamos un nuevo boton para el reinicio del juego */

function setGameOver(){
  guessField.disabled = true;
  gueesSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Iniciar nuevo juego";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);

  function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParasp");
    for (let i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent="";
    }

    resteButton.parentNode.removeChild(resteButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor (Math.random() * 100) + 1;

 

  }
  
}