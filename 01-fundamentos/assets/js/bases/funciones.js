//funcion
function saludar(){
    console.log('Hola mundo');
    return 1;

    console.log('Soy un codigo que esta despues del return')
}

//funcion anonima
const saludar2 = function(){
    console.log('Hola mundo denuevo')
}

//funcion con argumentos
function saludar3 (nombre){
    console.log(arguments)
    console.log('Hola '+ nombre)
}
//funcion anonima
const saludar4 = function( nombre ){
    console.log('Hola ' + nombre)
}

//funcion de flecha (landa function)
const saludarFlecha = () => {
    console.log('hola flecha')
}
const saludarFlecha2 = ( nombre ) => {
    console.log('hola ' + nombre)
}


const retornoDeSaludar = saludar(); // 1
// console.log(retornoDeSaludar);
// saludar2();
// saludar3('David' , 24 , false, 'Mexico');
// saludar4('Carlos');
// saludarFlecha();
// saludarFlecha2('Melisa');

function sumar (a, b){
    return a + b;
}

// const sumar2 = (a,b) =>{
//     return a + b;
// }
const sumar2 = (a,b) => a + b;


function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(sumar(1,2));
console.log(sumar2(2,2));
console.log(getAleatorio());
console.log(getAleatorio2());

