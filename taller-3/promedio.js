// const lista = [100, 200, 300, 500];


//  Para haller el promedio se suma todas las variables y se divide por el total de variables sumadas
// promedio = (h1 + h2 + ... + hn)/ pn

function calcularMediaAritmetica(lista) {
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
    }
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}