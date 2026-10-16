let anoNascimento = 2008;
let anoAtual = 2026;

let idade = anoAtual - anoNascimento;

console.log("Idade: " + idade);

// conferindo se já pode ser preso rs
if (idade > 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}