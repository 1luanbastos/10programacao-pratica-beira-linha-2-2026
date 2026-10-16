// Questão 07 - Média de três notas e aprovação (>= 60)
let nota1 = 70;
let nota2 = 65;
let nota3 = 80;

let media = (nota1 + nota2 + nota3) / 3;

console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
console.log("Média do aluno: " + media.toFixed(1));

if (media >= 60) {
    console.log("Resultado: Aluno aprovado!");
} else {
    console.log("Resultado: Aluno reprovado!");
}