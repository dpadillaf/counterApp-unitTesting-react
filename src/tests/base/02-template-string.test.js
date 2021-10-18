import { getSaludo } from '../../base/02-template-string'

describe('Test in 02-template-string.js', () => {
    
    test('test in getSaludo ', () => {
        
        const nombre = 'falkry';

        const resp = getSaludo(nombre);

        expect(resp).toBe( 'Hola ' + nombre + '!' )

    });
    
    test('test in getSaludo sin argumento', () => {
        
        const nombre = 'ninguno';

        const resp = getSaludo();

        expect(resp).toBe( 'Hola ' + nombre + '!' )

    });

});
