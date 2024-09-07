/*
function Persona(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
}

let persona = new Persona("Juan", 30, "Ingeniero");
*/


/*
Fundamentos REACT:
Fecha de inicio: 2024-12-16

Trabajo en equipo con Git y metodologías ágiles:
Fecha de inicio: 2025-02-05

Desarrollo Backend con Node.js:
Fecha de inicio: 2024-10-21
*/

// SOLUCIÓN 1

const Student = {

    name : 'Pepa',
    firstSurname : 'Fernández',
    secondSurname : 'López',
    active : true,
    classes : [['Fundamentos REACT','2024-12-16'],['Trabajo en equipo con Git y metodologías ágiles','2025-02-05'],['Desarrollo Backend con Node.js','2024-10-21']]

}
console.log(Student.name)
console.log(Student.classes[0][1])


// SOLUCIÓN 2

function Modules(title, initialDate){
    this.title = title;
    this.initialDate = initialDate;
}

const react = new Modules('Fundamentos REACT','2024-12-16')
const git = new Modules('Trabajo en equipo con Git y metodologías ágiles','2025-02-05')
const node = new Modules('Desarrollo Backend con Node.js','2024-10-21')

console.log('La estudiante ' + Student.name + ' empieza el módulo de' + react.title + ' en la fecha: ' + react.initialDate);

// template string
message = `La estudiante ${Student.name} ${Student.firstSurname} empezará el módulo de REACT titulado ${react.title} con fecha (año/mes/dia): ${react.initialDate}`
console.log(message)