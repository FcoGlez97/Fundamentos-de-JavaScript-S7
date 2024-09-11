//Objeto declarado sin propiedades

// let persona = {}
// console.log(persona)

//Objeto persona con propiedades

// let persona = {
//     nombre: 'Francisco',
//     apellido: 'Gonzalez',
//     edad: 27,
//     estudios: ['TSU','Licenciatura'],
//     hijos: false
// }

// console.log(persona.apellido)

//Segunda forma de declarar un objeto

// let persona = new Object()
// persona.nombre = 'Galileo',
// persona.apellido = 'Galilei',
// persona.edad = 60,

// console.log(persona)

//Tercera forma de declarar un objeto

let persona = new Object()
persona["nombre"] = 'José',
persona["apellido"] = 'Gonzalez',
persona["edad"] = 56,
persona['país'] = 'Francia',
delete persona.país

console.log(`Mi nombre es ${persona.nombre} y mi apellido es ${persona.apellido}`)
console.log("Mi nombre es " + persona.nombre + " " + "mi apellido es " + persona.apellido )
