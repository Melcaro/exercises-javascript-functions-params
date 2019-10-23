// Exercice 1 : écrivez un bout de code permettant d'afficher How are you dans la console après 2sec et Hello buddy après 0.5sec.

function sayHowAreYou() {
  alert('How are you?');
}

function sayHelloBuddy() {
  alert('Hello buddy');
}

setTimeout(sayHowAreYou, 2000);
setTimeout(sayHelloBuddy, 500);

// Exercice 2: Définissez une fonction checkConfirmationEmail. Cette fonction prendra 2 paramètres sous forme de string en entrée: un email et une confirmation d'email.
// La fonction affichera 'correct' si les deux emails sont les mêmes, 'not correct' sinon.

const email = prompt('Enter your mail');
const confirmMail = prompt('Confirm your mail');

function checkConfirmationEmail(mail, confirmMail) {
  const verifMessage =
    mail === confirmMail ? alert('Correct') : alert('Not correct');
}

checkConfirmationEmail(email, confirmMail);
