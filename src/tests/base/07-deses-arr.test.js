import { retornaArreglo } from '../../base/07-deses-arr';

describe('Test in 07-deses-arr', () => {
    
    test('should retornaArreglo debe funcionar', () => {
        
        const [ letras, numeros ] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    })
    

})
