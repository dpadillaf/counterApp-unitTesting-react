import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Test in 05-funciones', () => {
    
    test('should getUser debe retornar obj', () => {
        
        const UserTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(UserTest);

    })
    
    test('should getUsuarioActivo debe retornar obj', () => {
        
        const name = 'falkry';

        const UserTest = {
            uid: 'ABC567',
            username: name
        }

        const user = getUsuarioActivo(name);

        expect(user).toEqual(UserTest);

    })

})
