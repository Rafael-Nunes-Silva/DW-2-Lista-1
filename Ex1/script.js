document.getElementById("botaoCalcular").addEventListener(
    "click",
    function(){
        const nome = document.getElementById("nome").value;
        const altura = parseInt(document.getElementById("altura").value) / 100;
        const peso = parseFloat(document.getElementById("peso").value);

        const M = (peso / (altura ** 2)).toFixed(2);

        let classificacao = "Baixo peso muito grave";

        if (M > 40)
            classificacao = "Obesidade grau III";
        else if (M > 35)
            classificacao = "Obesidade grau II";
        else if (M > 30)
            classificacao = "Obesidade grau I";
        else if (M > 25)
            classificacao = "Sobrepeso";
        else if (M > 18.5)
            classificacao = "Peso normal";
        else if (M > 17)
            classificacao = "Baixo peso";
        else if (M > 16)
            classificacao = "Baixo peso grave";
        
        document.getElementById("resultado").innerText = `${nome} possui índice de massa corporal igual a ${M}, sendo classificado como: ${classificacao}.`;
    }
);
