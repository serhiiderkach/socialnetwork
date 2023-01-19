import { create } from 'react-test-renderer'
import Paginator from "./Paginator";


describe("Paginator component tests", () => {
    test("pages count is 11 but should be showed only 10", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}  currentPage={1} onPageChanged={x=>x}/>);
        const root = component.root;
        // eslint-disable-next-line
        let spans = root.findAllByType('span');
        expect(spans.length).toBe(10);
    });

    test("If pages count is more than 10 button NEXT should be present", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}  currentPage={1} onPageChanged={x=>x}/>);
        const root = component.root;
        // eslint-disable-next-line
        let button = root.findAllByType('button');
        expect(button.length).toBe(1);
    });
});