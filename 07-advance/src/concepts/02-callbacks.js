/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heros";


export const CallbacksComponent = ( element ) => {
    const id1 = '5d86371fd55e2e2a30fe1ccb1'
    const id2 = '5d86371fd55e2e2a30fe1ccb2'

    finHero(id1, (error, hero1) => {
        // element.innerHTML = hero?.name || 'No hay Heroe';
        if(error){
            element.innerHTML = error;
            return;
        }
        finHero(id2, (error, hero2)=>{
            if(error){
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        })
    });

}

/**
 * 
 * @param {String} id 
 * @param {(error: String|null, hero: Object) => void} callback 
 */

const finHero = ( id, callback) => {

    const hero = heroes.find(hero => hero.id === id);

    if (!hero){
        callback(`Hero with id ${id} not found.`);
        return;
    }
    callback( null, hero );
}