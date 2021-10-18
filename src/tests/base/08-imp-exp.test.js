import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes';

describe('test in 08-imp-exp', () => {
    
    test('should debe retornar heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroesData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual(heroesData);

    })

    test('should debe retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    })
    
    test('should debe retornar arreglo con heroes DC', () => {
        
        const heroes = getHeroesByOwner( 'DC' );
        const heroesData = heroes.filter( h => h.owner === 'DC' );

        expect( heroes ).toEqual( heroesData );

    })

    test('should debe retornar arreglo con heroes Marvel', () => {
        
        const heroes = getHeroesByOwner( 'Marvel' );
        const heroesData = heroes.filter( h => h.owner === 'Marvel' );

        expect( heroes.length ).toBe( heroesData.length );

    })

})
