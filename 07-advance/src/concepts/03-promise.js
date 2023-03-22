/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heros"


export const promiseComponent = ( element ) => {

    console.log( 'promiseComponent' )
    
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }
    const renderTwoHeroes = ( hero1, hero2 ) => {
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        `
    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h3>${error}</h3>
        `;
    }

    //Promise.add
    const id1 = '5d86371fd55e2e2a30fe1ccb1'
    const id2 = '5d86371fd55e2e2a30fe1ccb2'

    let hero1;

    finHero(id1)
        .then( hero => {
            hero1 = hero;
            return finHero(id2);
        }).then(hero => {
            
        })

    // `finHero(id1)
    //     .then((hero1) => {
    //         finHero(id2)
    //             .then(hero2 =>{
    //                 renderTwoHeroes(hero1, hero2)
    //             })
    //             .catch(error => renderError(error))
    //     })
    //     .catch(error => renderError(error))`
}




const finHero = ( id ) => {

    const promise = new Promise(( resolve, reject )=>{
        const hero = heroes.find( hero => hero.id === id )
         if( hero) {
             resolve ( hero) 
         }
         reject(`Hero with id ${id} not found.`)
    });

    return promise;
}