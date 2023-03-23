
import { heroes } from "../data/heros"


export const asyncComponent = ( element ) => {


    const id1 = '5d86371f2343e37870b91ef1';
    console.log('Inicio del componente');

    findHero(id1)
        .then(name => element.innerHTML = name)
        .catch(error => element.innerHTML = error)
    console.log('Fin del componente')
}


/**
 * 
 * @param {String} id 
 */
const findHero = async( id ) => {
    const hero = heroes.find( hero => hero.id === id )
    if(!hero)
        throw `Hero width id ${id} not found`;

    return hero?.name;
}