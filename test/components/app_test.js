import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group together similar tests
describe('App', () => {

	// Use 'it' to test a single attribute of a target
	it('shows the correct text', () => {

		// create an isntance of App
		const component = renderComponent(App);

		// Use 'expect' to make 'assertion' about a target, the thing we are testing
		expect(component).to.contain('React simple starter'); 

	});

});
