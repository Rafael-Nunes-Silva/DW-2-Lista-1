class Regiao{
    constructor(nome, valor, desconto){
        this.nome = nome;
        this.valor = valor;
        this.desconto = desconto;
    }
}

const regioes = [
    new Regiao("Sul", 1, 0.1),
    new Regiao("Sudeste", 1.2, 0.12),
    new Regiao("Centro-oeste", 1.3, 0.13)
];

window.onload = function(){
    const selectRegiao = document.getElementById("regiao");

    for(let i = 0; i < regioes.length; i++){
        const regiao = document.createElement("option");
        regiao.innerText = regioes[i].nome;
        regiao.value = i;
        selectRegiao.appendChild(regiao);
    }

    selectRegiao.selectedIndex = 0;
}

document.getElementById("botaoCalcular").addEventListener(
    "click",
    function(){
        const nPecas = parseInt(document.getElementById("nPecas").value);
        const regiao = regioes[parseInt(document.getElementById("regiao").selectedIndex)];
        const distancia = parseInt(document.getElementById("distancia").value);
        const precoCombustivel = parseFloat(document.getElementById("combustivel").value);
        
        let taxaRastreamento = (document.getElementById("rastreamento").checked ? 200 : 0);
        let fretePecas = (Math.min(nPecas, 1000) * regiao.valor) + Math.max(nPecas - 1000, 0) * (regiao.valor * (1 - regiao.desconto));
        let freteDistancia = distancia * precoCombustivel;
        let valorTotal = taxaRastreamento + fretePecas + freteDistancia;

        document.getElementById("taxaRastreamento").innerText = `Taxa de rastreamento: ${taxaRastreamento}.`;
        document.getElementById("fretePecas").innerText = `Valor do frete pelas peças: ${fretePecas}.`;
        document.getElementById("freteKm").innerText = `Valor do frete por quilômetro: ${freteDistancia}.`;
        document.getElementById("valorTotal").innerText = `Total do frete: ${valorTotal}.`;
    }
);
