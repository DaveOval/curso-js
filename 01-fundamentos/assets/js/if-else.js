let a = 5;

if ( a >= 10 ){
    console.log('A es mayor o igual a 10')
}else{
    console.log('A es menor a 10')
}

// console.log('Fin de programa')
const hoy = new Date();
let dia = hoy.getDay();

console.log({dia});

if(dia == 0){
    console.log('Domingo');
}else if (dia === 1){
    console.log('Lunes');
    // if ( dia === 1){
    //     console.log('Lunes');
    // }else{
    //     console.log('No es lunes ni domingo')
    // }
}else if(dia === 2 ){
    console.log('Martes');
}else{
    console.log('No es lunes, martes o domingo');
};

//sin usar if else, o switch, unicamente objetos
dia = 10; // 0 domingo

const diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
};
const diaLetras2 = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];


//dia de la semana
console.log(diaLetras[dia] || 'Dia no definido');
console.log(diaLetras2[dia] || 'Dia no definido');