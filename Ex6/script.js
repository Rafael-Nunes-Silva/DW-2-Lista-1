const mesesNomes = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
];

const dataElement = document.getElementById("data");
dataElement.addEventListener(
    "change",
    function(){
        document.getElementById("resultado").innerHTML = ConverterData(dataElement.value.split("/"));
    }
);

// window.addEventListener(
//     "load",
//     function(){
//         const dataElement = document.getElementById("data");
//         dataElement.addEventListener(
//             "change",
//             function(){
//                 document.getElementById("resultado").innerHTML = ConverterData(dataElement.value.split("/"));
//             }
//         );

//         // const data = this.document.getElementById("data").value.split("/");
//         // const dia = data[0];
//         // const mes = mesesNomes[parseInt(data[1])-1];
//         // const ano = data[2];
//         this.document.getElementById("resultado").innerHTML = `${dia} de ${mes} de ${ano}.`;
//     }
// );

function ConverterData(data){
    const dia = data[0];
    const mes = mesesNomes[parseInt(data[1])-1];
    const ano = data[2];
    return `${dia} de ${mes} de ${ano}.`;
}
