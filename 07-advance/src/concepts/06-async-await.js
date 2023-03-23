/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heros"


export const asyncAwaitComponent = ( element ) => {

    const id1 = '5d86371f2343e37870b91ef1'; 
    const id2 = '5d86371f25a058e5b1c8a65e';

    element.innerHTML = `hero1 / hero2`;



}

const finHero = async( id ) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero)
        throw `Hero not found`;
    return hero;
}