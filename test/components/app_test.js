import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group together similar tests
describe('App', () => {
	// create an isntance of App
	let component;

    beforeEach(() => {
        component = renderComponent(App);
    });


	/*
	// Use 'it' to test a single attribute of a target
	it('shows the correct text', () => {
		// Use 'expect' to make 'assertion' about a target, the thing we are testing
		expect(component).to.contain('React simple starter'); 
	});
	*/

	it('shows a comment box', () => {
		expect(component.find('.comment-box')).to.exist;
	});

	it('shows a comment list', () => {
		expect(component.find('.comment-list')).to.exist;
	});

});
