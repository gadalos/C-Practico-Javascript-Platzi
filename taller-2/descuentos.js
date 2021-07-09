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
    const precioDescuento = precio * (descuento)/100;
    const precioFinal = precio - precioDescuento;

    return precioFinal;
}

function onClickButtonPriceDiscount() {
    const entradaPrecio = document.getElementById("inputPrice");
    const priceValue = entradaPrecio.value;

    const entradaDescuento = document.getElementById("inputDiscount");
    const discountValue = entradaDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $ " + precioConDescuento;
}

