let juegos = ['zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log(ultimo);

juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr})
});

juegos.forEach(element => {
    console.log(element)
});

let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fore Emblem');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});
console.log(juegoBorrado);

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex})