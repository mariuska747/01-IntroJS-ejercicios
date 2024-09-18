const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['Javascript','HTML','CSS'],
        proyectos:[
            {id:1, nombre: 'Proyecto1'},
            {id:2, nombre: 'Proyecto2'}
        ]
    },
    {
        id: 2,
        nombre: 'Maria',
        habilidades: ['Python','SQL','Django'],
        proyectos:[
            {id:1, nombre: 'Proyecto3'},
            {id:2, nombre: 'Proyecto4'}
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java','Spring','Hibernate'],
        proyectos:[
            {id:1, nombre: 'Proyecto5'},
            {id:2, nombre: 'Proyecto6'}
        ]
    }
]
// Usando filter para encontrar la persona con la habilidad 'Javascript'

const desarrolladoresJS = datos.filter(persona => persona.habilidades.includes('Javascript'));

console.log(desarrolladoresJS);

// usando flatMap y map para obtener los proyectos

const projects = datos.flatMap(persona => persona.proyectos.map(proyecto => proyecto.nombre))

console.log(projects)

