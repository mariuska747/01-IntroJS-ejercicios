/*

EJERCICIO 3.1

*/

// SOLUCION 1
const joinFunction = (lista) => {

    let url = [...lista];
    const extension = url.pop();
    const path = url.join("/");
    const file = `.${extension}`;
    //reconstruyo la lista
    //lista = lista.push(extension)
    
    return path + file;


}
const input1 = ['Downloads','Videos','capture','mp4']

console.log(joinFunction(input1)) // Downloads/Videos/capture.mp4
console.log(input1)


//SOLUCION 2 
const joinFunction2 = (lista) => {
    const lastELementIndex = lista.length - 1;
    const extension = lista[lastELementIndex];
    let fileNameIndex = lista.length - 2; 
    fileName = lista[fileNameIndex];

    file = `${fileName}.${extension}`;
    
    let path = ""
    for(let i=0; i < fileNameIndex; i++) {
        path = path + lista[i] + "/";
    }
    
    return path + file;
}

console.log(joinFunction2(input1)) // Downloads/Videos/capture.mp4

// solucion 3 de compañero con slice
const buildPath = (input) => {
    // recuperamos la sublista resultante de quitar el ultimo elemento del input y unimos los elementos en una cadena de caracteres metiendo '/' entre los elementos
    const inputPath = input.slice(0, -1).join('/');
    // recuperamos el ultimo elemento del input
    const inputExtension = input.slice(-1);
    // unimos el path y la extension con un '.'
    const inputPathExtension = `${inputPath}.${inputExtension}`; // inputPath + '.' + inputExtension
    return inputPathExtension;
  };
  





/*

EJERCICIO 3.2

*/

const input = "10";
const input2 = "1";
const input3 = "123456";

const separate = (strings) => {

    let lista = strings.split("")
    const result = lista.join("-");
    
    return result;
}
console.log(separate(input));
console.log(separate(input2));
console.log(separate(input3));


/* 

EJERCICIO 3.3

*/

const input4 = "string"

const reverseAndLength = (strings) => {

    const reversed = strings.split("").reverse().join("")
    const lengths = strings.length

    const result = `${lengths} ${reversed}`
   
    return result

}

console.log(reverseAndLength(input4));