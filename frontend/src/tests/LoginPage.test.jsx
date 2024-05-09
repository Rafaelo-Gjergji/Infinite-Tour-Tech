import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';
import { Provider } from 'react-redux';
import store from '../store/store';  // Adjust the path as necessary

test('renders login page and accepts input', () => {
    render(
        <Provider store={store}>
            <LoginPage />
        </Provider>
    );

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('password123');
});
