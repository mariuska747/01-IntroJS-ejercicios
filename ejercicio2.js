const calcularPromedio = (listaNums) => {

    let sumaNums = 0

    /*
    EL bug estaba en el <= de la longitud de la lista puesto que tiene que ser length-1 el valor de indice maximo
    */

    for (let i = 0; i < listaNums.length; i++){
        sumaNums += listaNums[i]
    }

    const promedio = sumaNums / listaNums.length
    return promedio
}
const listaNumeros = [1,2,3,4]
const promedioListaNumeros = calcularPromedio(listaNumeros)

console.log(promedioListaNumeros)