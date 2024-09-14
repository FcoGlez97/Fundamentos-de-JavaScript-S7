// class Persona{
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad} años`);
//     }

// }

// let persona = new Persona('Francisco', 27);

// persona.saludar();

//Método estático

// class Persona{
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad} años`);
//     }

//     static definicion(){
//         console.log("Una persona es un ser humano")
//     }

// }

// Persona.definicion();

//Clases y Herencias

// class Persona{
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad} años`);
//     }

//     static definicion(){
//         console.log("Una persona es un ser humano")
//     }

// }

// class Desarrollador extends Persona{

// }

// Desarrollador.definicion();


// Otro ejemplo

// class Persona{
//     constructor(nombre, edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     saludar(){
//         console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad} años`);
//     }

//     static definicion(){
//         console.log("Una persona es un ser humano")
//     }

// }

// class Desarrollador extends Persona{
//     saludoDesarrollador(){
//         this.saludar();
//         console.log("Soy un desarrollador de software");
//     }
// }

// let desarrolador = new Desarrollador('Francisco',27);

// desarrolador.saludoDesarrollador();

//Palabra reservada SUPER

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi edad es de ${this.edad} años`);
    }

    static definicion(){
        console.log("Una persona es un ser humano")
    }

}

class Desarrollador extends Persona{
    
    constructor(nombre, edad, tipo){
        super(nombre, edad);
        this.tipo = tipo;
    }

    saludoDesarrollador(){
        this.saludar();
        console.log(`Soy un ${this.tipo} Developer`);
    }
}

let desarrolador = new Desarrollador('Francisco',27, 'Frontend');

desarrolador.saludoDesarrollador();
