const idade = prompt("Informe sua idade:");

let faixaEtaria = "";
if (idade >= 60) {
    faixaEtaria = "Idoso";
}
else if (idade >= 30) {
    faixaEtaria = "Adulto";
}
else if (idade >= 15) {
    faixaEtaria = "Jovem";
}
else {
    faixaEtaria = "Criança";
}

document.getElementById("resultado").innerText = `Faixa Etária: ${faixaEtaria}.`;
