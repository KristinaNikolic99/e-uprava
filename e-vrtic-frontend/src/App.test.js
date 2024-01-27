import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('render login component in the document', () => {
  const {getByRole} = render(<App />);
  const childElement = getByRole('button', {
    name: /UPIŠI ME/
  })
  expect(childElement).toBeInTheDocument();
})
