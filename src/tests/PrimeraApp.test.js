import React from 'react';
import FirstApp from "../FirstApp";
import { shallow } from 'enzyme';


describe('test in FirstApp', () => {
    
    // test('should mostrtar mensaje ', () => {
        
    //     const hello="hello, falkry";
    //     const { getByText } = render( <FirstApp hello={ hello } /> );

    //     expect( getByText( hello ) ).toBeInTheDocument();

    // })

    test('should debe de mostrar FirstApp correctamente', () => {
        
        const hello = 'hello, falkry';
        const wrapper = shallow(<FirstApp hello={ hello } />);

        expect( wrapper ).toMatchSnapshot()

    })
    
    test('should mostrar subtitulo enviado por props', () => {
        
        const hello = 'hello, falkry';
        const subtitle = 'i am a subtitle';
        const wrapper = shallow(<FirstApp hello={ hello } subtitle={ subtitle } />);

        const textP = wrapper.find( 'p' ).text();
        expect( textP ).toBe( subtitle );

    })
    

})
