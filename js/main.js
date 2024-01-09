/* Const ref to main-title */
const resultElement = document.getElementById("main-title");

/* Name const */
const utname = prompt("Qual è il tuo nome?");
console.log(utname);

/* Surname const */
const utsurname = prompt("Qual è il tuo cognome?");
console.log(utsurname);

/* Pref-color const */
const utprefcolor = prompt("Qual è il tuo colore preferito?");
console.log(utprefcolor);

/* Password construction */
const Password = utname + utsurname + utprefcolor + "23";
console.log(Password);

/* Control password */
resultElement.innerHTML = "La tua password sarà:" + " " + Password;
