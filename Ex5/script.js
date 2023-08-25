const num1 = parseInt(prompt("Insira o numero 1:"));
const num2 = parseInt(prompt("Insira o numero 2:"));
const operacao = prompt("Insira a operação:");

switch(operacao.toLocaleLowerCase()){
    case "soma":
        alert(num1 + num2);
        break;
    case "subtração":
        alert(num1 - num2);
        break;
    case "multiplicação":
        alert(num1 * num2);
        break;
    case "divisão":
        alert(num1 / num2);
        break;
}
