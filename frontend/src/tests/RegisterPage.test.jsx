import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RegisterPage from './RegisterPage';
import { Provider } from 'react-redux';
import store from '../store/store';  

test('renders register page and accepts input', () => {
    render(
        <Provider store={store}>
            <RegisterPage />
        </Provider>
    );

    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const registerButton = screen.getByRole('button', { name: /register/i });

    fireEvent.change(usernameInput, { target: { value: 'newuser' } });
    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'newpassword123' } });
    fireEvent.click(registerButton);

    expect(usernameInput).toHaveValue('newuser');
    expect(emailInput).toHaveValue('user@example.com');
    expect(passwordInput).toHaveValue('newpassword123');
});
