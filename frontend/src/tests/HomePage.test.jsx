import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders HomePage', () => {
    render(<HomePage />);
    expect(screen.getByText(/welcome to infinite tour technologies/i)).toBeInTheDocument();
});
