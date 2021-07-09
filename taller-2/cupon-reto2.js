function calcularPrecioConDescuento(precio, descuento) {
  const precioDescuento = (precio * descuento) / 100;
  const precioFinal = precio - precioDescuento;

  return precioFinal;
}

const cupones = [
  {
    name: "psvita",
    descuento: 15,
  },
  {
    name: "psp",
    descuento: 20,
  },
  {
    name: "ps2",
    descuento: 25,
  },
  {
    name: "ps3",
    descuento: 30,
  },
  {
    name: "ps4",
    descuento: 35,
  },
  {
    name: "ps5",
    descuento: 40,
  },
];

function cuponDescuento() {
  // Capturamos las variables obtenidas del formulario html
  const entradaPrecio = document.getElementById("inputPrecio");
  const precioValue = entradaPrecio.value;

  const entradaCupon = document.getElementById("inputCupon");
  const cuponesValue = entradaCupon.value;

  const entradaProducto = document.getElementById("inputProducto");
  const productoValue = entradaProducto.value;

  //   Creamos una funcion para validar si es verdad que el cupon ingresado se encuentra registrado en memoria del array objeto y el resultado lo guardamos en una variable
  const validarValorCupon = function (cupones) {
    return cupones.name === cuponesValue;
  };

  const cuponUsuario = cupones.find(validarValorCupon);
//   console.log(cuponUsuario);

  //   Utilizamos la condicional para mandar un alert al usuario en caso que el cupon sea invalido para este producto
  if (!cuponUsuario) {
    alert("El cupón '" + cuponesValue + "' no es valido");
  } else {
    //   Creamos la variable precioConDescuento y la usamos para almacenar los resultados obtenidos en la funcion calcularPrecioConDescuento
    const descuento = cuponUsuario.descuento;
    // console.log(descuento);
    const precioConDescuento = calcularPrecioConDescuento(
      precioValue,
      descuento
    );
    // Con los datos obtenidos lo enviamos al html para su visualización
    const mostrarResultado = document.getElementById("Resultado");
    mostrarResultado.innerText =
      "Para el producto: " +
      productoValue +
      "\n El precio con el cupón de descuento es de: S/" +
      precioConDescuento +
      " nuevos soles";
  }
}
