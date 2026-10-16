// Questão 03 - Calcula idade e verifica maioridade
let anoNascimento = 2007;
let anoAtual = 2026;

let idade = anoAtual - anoNascimento;

console.log("Idade: " + idade + " anos");

if (idade >= 18) {
    console.log("Situação: Maior de idade.");
} else {
    console.log("Situação: Menor de idade.");
}