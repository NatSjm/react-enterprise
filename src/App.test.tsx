import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers'

import App from './App';
//import '@testing-library/jest-dom/extend-expect';

expect.extend(matchers);




test('it should render the component', () => {
    render(<App />);
    const heading = screen.getByText('Vite + React');
    expect(heading).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /count is/i });
    expect(button).toHaveTextContent('count is 0');

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');

    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
});