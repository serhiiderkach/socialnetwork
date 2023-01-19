import {render, screen} from '@testing-library/react';
import SamuraiJSApp from './App';
import {unmountComponentAtNode} from "react-dom";

test('renders learn react link', () => {
  const div = document.createElement('div')
  render(<SamuraiJSApp />);
  unmountComponentAtNode(div)

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
