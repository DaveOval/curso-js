const regresaTrue = () =>{
    console.log('Regresa true');
    return true;
}
const regresaFalse = () =>{
    console.log('Regresa False');
    return false
}

console.warn('Not o la negacion');
console.log(true); // ture
console.log(!true);// false
console.log(!false);// true

console.log(!regresaFalse());

console.warn('And'); //true si todos los valores son son verdaderos
console.log(true && true)// true
console.log(true && !false)// true


console.log('===============');
console.log( regresaFalse() && regresaTrue()); //false
console.log( regresaTrue() && regresaFalse()); //false


console.log('======&&=======');
regresaTrue() && regresaFalse();

console.log('4 condiciones', true && true && true && false);// false

console.warn('OR');//true
console.log( true || false);
console.log( false || false);

console.log( regresaTrue() || regresaFalse());
console.log('4 condiciones', true || true || true || false);// true

console.warn('asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola mundo' && 150;
const a2 = 'Hola' && 'Mudo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;

console.log({a1, a2, a3, a4, a5});

if(true || true || true || false){
    console.log('Hacer algo')
}else{
    console.log('Hacer otra cosa');
}

