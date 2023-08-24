const nome = prompt("Informe seu nome:");
const altura = parseInt(prompt("Informe sua altura (cm):")) / 100;
const peso = parseFloat(prompt("Informe seu peso (Kg):"));

const M = (peso / (altura ** 2)).toFixed(2);

let classificacao = "";

if (M > 40){
    classificacao = "Obesidade grau III";
}
else if (M > 35){
    classificacao = "Obesidade grau II";
}
else if (M > 30){
    classificacao = "Obesidade grau I";
}
else if (M > 25){
    classificacao = "Sobrepeso";
}
else if (M > 18.5){
    classificacao = "Peso normal";
}
else if (M > 17){
    classificacao = "Baixo peso";
}
else if (M > 16){
    classificacao = "Baixo peso grave";
}
else {
    classificacao = "Baixo peso muito grave";
}

document.getElementById("resultado").innerText = `${nome} possui índice de massa corporal igual a ${M}, sendo classificado como: ${classificacao}.`;
// alert(`${nome} possui índice de massa corporal igual a ${M}, sendo classificado como: ${classificacao}.`);
