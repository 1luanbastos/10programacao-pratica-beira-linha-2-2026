// Questão 09 - Média >= 60 e pelo menos 50 em cada avaliação
let nota1 = 65;
let nota2 = 70;
let nota3 = 55;

let media = (nota1 + nota2 + nota3) / 3;

console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
console.log("Média: " + media.toFixed(1));

if (media >= 60 && nota1 >= 50 && nota2 >= 50 && nota3 >= 50) {
    console.log("Situação: Aluno aprovado!");
} else {
    console.log("Situação: Aluno não aprovado.");
}