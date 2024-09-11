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

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi edad es ${this.edad} años`);
    }

    static definicion(){
        console.log("Una persona es un ser humano")
    }

}

Persona.definicion();

//Nota: Estamos en vídeo Clase: Clases, minuto 9 con 46 segundos