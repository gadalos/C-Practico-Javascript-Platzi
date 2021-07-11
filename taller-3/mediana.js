function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// const lista = [100, 200, 500, 40000000];

function calcularMediana() {
  const entradaMediana = document.getElementById("inputMediana");
  const medianaValue = entradaMediana.value;
  let arrayMediana = Array.from(medianaValue.split(","), Number);

  const mitadLista = parseInt(arrayMediana.length / 2);
  // console.log(mitadLista);

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  if (esPar(arrayMediana.length)) {
    const elemento1 = arrayMediana[mitadLista - 1];
    const elemento2 = arrayMediana[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
  } else {
    mediana = arrayMediana[mitadLista];
  }
  const mostrarResultado = document.getElementById("resultadoMediana");
  mostrarResultado.innerText = "La mediana es de: " + mediana;
}
