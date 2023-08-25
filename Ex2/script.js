document.getElementById("botaoCalcular").addEventListener(
    "click",
    function(){
        const idade = document.getElementById("idade").value;

        let faixaEtaria = "Criança";

        if (idade >= 60) {
            faixaEtaria = "Idoso";
        }
        else if (idade >= 30) {
            faixaEtaria = "Adulto";
        }
        else if (idade >= 15) {
            faixaEtaria = "Jovem";
        }

        document.getElementById("resultado").innerText = `Faixa Etária: ${faixaEtaria}.`;
    }
);
