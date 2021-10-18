import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes";


describe('Test in 09-promesas', () => {
    
    test('should getHeroeByIdAsync debe retornar un heroe async', ( done ) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( h => {

                expect( h ).toEqual( heroes[0] );
                done();

            } );

    })
    
    test('should getHeroeByIdAsync debe obtener un error si el heroe async no existe', ( done ) => {
        
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( err => {

                expect( err ).toEqual( 'No se pudo encontrar el héroe' );
                done();

            } );

    })

})
