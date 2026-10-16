let nota1 = 65;
let nota2 = 70;
let nota3 = 55;

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média: " + media);

// conferindo a média e se não tirou menos de 50 em nenhuma
if (media >= 60 && nota1 >= 50 && nota2 >= 50 && nota3 >= 50) {
    console.log("Situação: Aprovado");
} else {
    console.log("Situação: Não foi aprovado");
}