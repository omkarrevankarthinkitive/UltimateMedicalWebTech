import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  test('renders login page', () => {
    render(<Login />);
    const welcomeMessage = screen.getByText('Welcome Back');
    expect(welcomeMessage).toBeInTheDocument();
    const emailInput = screen.getByPlaceholderText('E-Mail');
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  test('submits form with login credentials', () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('E-Mail');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    const submitHandler = jest.fn();
    loginButton.addEventListener('click', submitHandler);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);
    expect(submitHandler).toHaveBeenCalled();
  });
});
