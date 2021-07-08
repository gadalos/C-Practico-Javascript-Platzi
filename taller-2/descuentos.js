const precioOriginal = 120;
const descuento = 15;

// Versión Platzi
// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;
// console.log({
//     precioOriginal, descuento, precioDescuento, precioFinal
// });

// Versión Personal
const precioDescuento = precioOriginal * (descuento)/100;
const precioFinal = precioOriginal - precioDescuento;

console.log("El precio que se debe pagar es: " + precioFinal + " soles");

