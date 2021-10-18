import { shallow } from "enzyme";
import CounterApp from "../CounterApp";


describe('test in CounterApp', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> );

    } );
    
    test('should mostrar CounterApp correctamnete', () => {
        
        const value = 20;
        const wrapper = shallow( <CounterApp value={ value } /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('should default value 100', () => {
        
        const defaultValue = Number(wrapper.find('h2').text());

        expect( defaultValue ).toBe( 100 );

    })
    
    test('should incrmenet value with btn +1', () => {
        
        wrapper.find( 'button' ).at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '101' );

    })
    
    test('should decrement value with btn -1', () => {
       
        wrapper.find( 'button' ).at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '99' );

    })

    test('should reset default value', () => {

        const wrapper = shallow( <CounterApp value={ 20 } /> );

        wrapper.find( 'button' ).at(0).simulate('click');
        wrapper.find( 'button' ).at(0).simulate('click');
        wrapper.find( 'button' ).at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '20' )

    })
    

})
