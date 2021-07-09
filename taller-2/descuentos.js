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

