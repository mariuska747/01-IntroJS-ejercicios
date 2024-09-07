/*

EJERCICIO 3.1

*/

// SOLUCION 1
const joinFunction = (lista) => {

    let path = lista;
    const extension = lista.pop();
    path = lista.join("/");
    const file = `.${extension}`;
    return path + file;

}
const input1 = ['Downloads','Videos','capture','mp4']

console.log(joinFunction(input1)) // Downloads/Videos/capture.mp4

//SOLUCION 2 (NO FUNCIONA)
const joinFunction2 = (lista) => {
    const lastELementIndex = lista.length - 1;
    const extension = lista[lastELementIndex];
    let fileNameIndex = lista.length - 2; 
    fileName = lista[fileNameIndex];

    file = `${fileName}.${extension}`;
    
    let path = ""
    for(let i=0; i < lastELementIndex; i++) {
        path = path + lista[i] + "/";
    }
    
    return path + file;
}

console.log(joinFunction2(input1)) //Downloads/Videos/Videos.capture


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