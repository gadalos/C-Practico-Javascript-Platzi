//  Para haller el promedio se suma todas las variables y se divide por el total de variables sumadas
// promedio = (h1 + h2 + ... + hn)/ pn

// const lista = [100, 200, 300, 500];

function calcularMediaAritmetica() {
  // let sumaLista = 0;

  // for (let i = 0; i < lista.length; i++) {
  // sumaLista = sumaLista + lista[i];
  // }

// Se captura los datos del html y se guardan los valores dentro de una variable
  const entradaDatos = document.getElementById("inputPromedio");
  const datosValue = entradaDatos.value;
  //   console.log(datosValue);
//   Al ser un String los valores capturados, se procede a convertir el formato a Number 
  let arrayValor = Array.from(datosValue.split(","), Number);
  //   console.log(arrayValor);

//   Procedemos a realizar la suma total de los valores obtenidos en el html mediante el metodo reduce() de array
  const sumaLista = arrayValor.reduce(function (valorAcumulado = 0,nuevoElemento) {
    // console.log(valorAcumulado);
    // console.log(nuevoElemento);
        return valorAcumulado + nuevoElemento;
  });
//   Obtenemos la media aritmetica 
  const promedioLista = sumaLista / arrayValor.length;

//   Enviamos los resultados obtenidos a la pagina html para su visualizacion
  const mostrarResultado = document.getElementById("resultadoMedia");
  mostrarResultado.innerText = "La media es de: " + promedioLista;
}
