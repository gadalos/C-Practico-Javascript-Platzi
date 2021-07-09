// const precioOriginal = 120;
// const descuento = 18;

// Versión Platzi
// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

// Versión Personal
// const precioDescuento = precioOriginal * (descuento)/100;
// const precioFinal = precioOriginal - precioDescuento;

// console.log("El precio que se debe pagar es: " + precioFinal + " soles");

// console.log({
//     precioOriginal, descuento, precioDescuento, precioFinal
// });

function calcularPrecioConDescuento(precio, descuento) {
  const precioDescuento = (precio * descuento) / 100;
  const precioFinal = precio - precioDescuento;

  return precioFinal;
}

function onClickButtonPriceDiscount() {
  const entradaPrecio = document.getElementById("inputPrice");
  const priceValue = entradaPrecio.value;

  const entradaDescuento = document.getElementById("inputDiscount");
  const discountValue = entradaDescuento.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $ " + precioConDescuento;
}

//Obs: Cuando se colo '{}' en un array se convierte en array de objeto
// Creacion de Array de Strings para cupones
const cupones = ["ps2","psvita", "ps3", "ps4", "ps5"];


function cuponDescuento() {
    const entradaPrecio = document.getElementById("inputPrecio");
    const precioValue = entradaPrecio.value;

    const entradaCupon = document.getElementById("inputCupon");
    const cuponValue = entradaCupon.value;

    const entradaProducto = document.getElementById("inputProducto");
    const productoValue = entradaProducto.value;

    let descuento;

    switch (cuponValue) {
        case "psvita":
            descuento = 15;
            break;
        case "ps2":
            descuento = 30;
            break;
        case "ps3":
            descuento = 25;
            break;
        case "ps4":
            descuento = 20;
            break;
        case "ps5":
            descuento = 35;
            break;
    }

    const precioConCuponDescuento = calcularPrecioConDescuento(precioValue, descuento);

    const mostrarResultado = document.getElementById("Resultado");
    mostrarResultado.innerText = "Para el producto: " + productoValue 
    + "\n El precio con el cupón de descuento es de: S/" + precioConCuponDescuento + " nuevos soles";

}
