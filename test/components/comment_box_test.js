import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// use 'describe' to group together similar tests
describe('CommentBox', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

	// Use 'it' to test a single attribute of a target
	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    it('has the correct class commentBox', () => {
        expect(component).to.have.class('comment-box');
    });

    describe('entering some text', () => {
        beforeEach(() =>{
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows text that is entered', () =>{
            expect(component.find('textarea')).to.have.value('new comment');
        });

         it('clears the input, when submitted', () =>{
             component.simulate('submit');
             expect(component.find('textarea')).to.have.value('');
        });

    });
   
});
