const lista = [10, 20, 30, 10, 20, 30, 40, 50, 10];

const listaContador = {};

lista.map(
    function (elemento) {
        if (listaContador[elemento]) {
            // listaContador[elemento] = listaContador[elemento] + 1;
            listaContador[elemento] += 1;
        } else{
            listaContador[elemento] = 1;
        }
        
    }
);

function calcularModa() {
    entradaModa  = document.getElementById("inputModa");
    modaValue = entradaModa.value;

}