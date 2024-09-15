// const nombres = [];

// var nombre1 = 'Francisco';
// var nombre2 = 'Gema';
// var nombre3 = 'Manuel';
// var nombre4 = 'Miguel';
// var numero = 27;
// var estatus = false;

// console.log(nombre1);
// console.log(nombre2);
// console.log(nombre3);
// console.log(nombre4);
// console.log(numero);
// console.log(estatus);

// const nombres2 = ['Francisco', 'Gema', 'Manuel', 'Miguel', 27, true];
// console.log(nombres2);

// const nombres3 = new Array ('Francisco', 'Gema', 'Manuel', 'Miguel', 27, false);
// nombres3[0] = 'Angel';
// console.log(nombres3);

// //Agregar y eliminar datos en un arreglo
// const nombres4 = new Array ('Francisco', 'Gema', 'Manuel', 'Miguel', 27, false);

// nombres4.push('México');
// nombres4.unshift('Primer elemento');
// nombres4.pop();
// nombres4.shift();
// console.log(nombres4);

//Métodos de arreglo

const nombres5 = new Array ('Francisco', 'Gema', 'Manuel', 'Miguel', 27, false);
console.log(nombres5);

for(let i=0; i<nombres5.length; i++){
    console.log(nombres5[i]);
}

nombres5.forEach(function(elemento, indice){
    console.log(elemento);
});

//Filter

const valores1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = valores1.filter((numero) => numero <7);
console.log(resultado);