// console.log("Hola, mundo")

//Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function perimetroCuadrado(lado) {
    return lado * 4;
}
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
function areaCuadrado(lado) {
    return lado * lado ;
}
console.groupEnd();

//Código del triangulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(
//   "Los lados del triagulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm "
// );
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm2");
function areaTriangulo(base, altura) {
    return (base * altura ) / 2;
}
console.groupEnd();

//Codigo del Circulo
console.group("Círculos");
// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");
// Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");
function diametroCirculo(radio) {
    return radio * 2 ;
}
// PI
// const PI = 3.1415;
const PI = Math.PI;
console.log("El valor de PI es: " + PI);
//Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI ;
}
// Área
// const areaCirculo = radioCirculo * radioCirculo * PI;
// console.log("El área del circulo es: " + areaCirculo + "cm2");
function areaCirculo(radio) {
    return radio * radio * PI ;
}

console.groupEnd();
