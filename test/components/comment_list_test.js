import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

// use 'describe' to group together similar tests
describe('CommentList', () => {
    let component;

    beforeEach(() => {
        const props = { comments: ['new comment', 'another comment', 'one more extra comment']};
        component = renderComponent(CommentList, null, props);
    });


    it('shows an LI tag for each comment', () => {
        expect(component.find('li').length).to.equal(3);
    });

    it('shows each coment that is provided', () => {
        expect(component).to.contain('new comment');
    });
});