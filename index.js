/*
* primeiro programa em JavaScript
* Gabriel Pereira dos Santos
*/

console.log("ola mundo");
// prompt("Qual é o seu nome?");
const VariavelA = 100;
const VariavelB = VariavelA + 50;
const VariavelC = VariavelA / VariavelB
console.log(VariavelA);
console.log(VariavelB);
console.log(VariavelC);

// variavel let
let numero = 5;
console.log(numero)
numero = 120
console.log(numero)

// Concatnar testos
// let nome = "Gabriel";
// let sobrenome = "Pereira";
// let idade = 15;
// console.log("Olá", nome, sobrenome, "voce tem", idade, "anos"); 

// variavel booleanas
const varialvelFalsa = false;
const variavelVerdadeira = true;

console.log("variavel falsa: " + varialvelFalsa);
console.log("Variavel verdadeira: " + variavelVerdadeira);

// exercicio 1

let nome = "Gabriel";
let sobrenome = "Pereira";
let idade = 15;

console.log("Olá seu nome é", nome, sobrenome, "voce tem", idade, "anos", "seu status de estudante é", prompt("qual o seu status de estudante?"));

// typeof

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof prompt);

// undefined
let banana
console.log(typeof banana);
banana = "fruta";
console.log(typeof banana);

const vazio = null;
console.log(typeof vazio)

// promt
// let valor = prompt("seu nome");
// console.log(valor);

// exercicio 2

let Nome = prompt("seu nome");
console.log(Nome);

let Idade = prompt("qual a sua idade");
console.log(Number (Idade));

console.log(typeof Nome);
console.log(typeof Number (Idade));
