document.getElementById("botaoCalcular").addEventListener(
    "click",
    function(){
        const codigo = parseInt(document.getElementById("codigo").value);
        const horas = parseInt(document.getElementById("horas").value);

        const turnoElement = document.getElementById("turno");
        const turno = turnoElement[turnoElement.selectedIndex].value;

        const categoriaElement = document.getElementById("categoria");
        const categoria = categoriaElement[categoriaElement.selectedIndex].value;

        const salarioMinimo = document.getElementById("salario").value;

        let valorHoraTrabalhada = 0;
        switch(categoria){
            case "G":
                if(turno === "M" || turno === "V")
                    valorHoraTrabalhada = 0.04 * salarioMinimo;
                break;
            case "F":
                if(turno === "N")
                    valorHoraTrabalhada = 0.02 * salarioMinimo;
                else if(turno === "M" || turno === "V")
                    valorHoraTrabalhada = 0.01 * salarioMinimo;
                break;
        }
        
        const salarioInicial = valorHoraTrabalhada * horas;
        let valorAuxilioAlimentacao = salarioInicial * 0.25;
        if(salarioInicial > 1200)
            valorAuxilioAlimentacao = salarioInicial * 0.2;
        else if(salarioInicial > 800)
            valorAuxilioAlimentacao = salarioInicial * 0.15;

        document.getElementById("resultado").innerText = `Código: ${codigo}\nHoras | Valor/Hora: ${horas} | ${valorHoraTrabalhada}\nSalário Inicial | Auxílio Alimentação: ${salarioInicial} | ${valorAuxilioAlimentacao}\nSalário Final: ${salarioInicial + valorAuxilioAlimentacao}`;
    }
);
