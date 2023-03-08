/**
* Esta funciona para tomar la ultima carta del deck y eliminarla
* @param {Array<String>} deck es un arreglo de string
* @returns {String} retorna la ultima carta y la elimina
*/

export const pedirCarta = (deck) => {
  
    if( !deck || deck.length === 0){
        throw new Error ('No hay cartas en el deck');
    } 
    return deck.pop();
}