/**
 * 
 * @param {HTMLDivElement} element 
 */


export const generatorFunctionComponent = ( element ) => {

    // const myGenerator = myFirstGeneratorFunction();
    // consoe.log(myGenerator.next())

    const genId = idGenerato();

    const button = document.createElement('button');
    button.innerText = 'Click me'
    element.append(button);


    const rederButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click',  rederButton )
  
    

}

function* idGenerato(  ) {
     let currentid = 0;
     while(true){
        yield ++ currentid;
     }
}


function* myFirstGeneratorFunction(){

    yield 'Mi primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    
    return 'ya no hay valores';
    
    yield 'Ya no pueden hacer nada';


}

