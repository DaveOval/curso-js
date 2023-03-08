// function crearPersona(nombre, apellido){
//     return{
//         nombre: nombre,
//         apellido: apellido
//     }
// }
///////////////////////////////////////////////////
//se puede resumir de esta forma
// function crearPersona(nombre, apellido){
//     return{
//         nombre,
//         apellido
//     }
// }
//////////////////////////////////////////////////
// y tambien se puede resumir mas asi
// function crearPersona(nombre, apellido){
//     return{nombre,apellido}
// }
//////////////////////////////////////////////////
//tambien se puede hacer en funcion flecha
// const crearPersona = (nombre, apellido) =>{
//     return{nombre,apellido}
// }
///////////////////////////////////////////////////
//otra forma para hacerlo en funcion flecha mas resumido
//se tiene que poner entre parentesis para indicarle a js
const crearPersona = (nombre, apellido) => ({ nombre,apellido });


const persona = crearPersona('Fernando', 'Herrera');
console.log(persona);

function imprimeArgumentos(){
    console.log( arguments)
}
imprimeArgumentos(10, true, false, 'Fernando', 'Hola');