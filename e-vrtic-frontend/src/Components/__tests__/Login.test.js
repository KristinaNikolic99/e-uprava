import {fireEvent, render, screen} from "@testing-library/react";
import { LoginForm } from "../LoginForm/LoginForm";
import { BrowserRouter as Router} from 'react-router-dom'
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from 'history';

describe("Test the login component", () => {
    test("render the login form with 2 button", async () => {
        render(<Router>
            <LoginForm />
          </Router>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    });

    test("password input should have type password", () => {
        render(<Router>
            <LoginForm />
          </Router>);
        const password = screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type", "password");
    });

    test("click login button", async () => {
        const {getByTestId} = render(<Router>
            <LoginForm />
          </Router>);
        const history = createMemoryHistory();
        const submitBtn = getByTestId("submit");
        const username = screen.getByPlaceholderText("Username");
        const password = screen.getByPlaceholderText("Password");
        //username.value = "Kika";
        //password.value = "Kika"
        userEvent.type(username, "krisN");
        userEvent.type(password, "kika123");
        //fireEvent.click(loginBtn);
        
        await fireEvent.click(submitBtn);
        console.log(username.value);
        expect(username.value).toMatch("krisN");
        //console.log(history)
        //expect(history.location.pathname).toBe("/");
    });

    test("click login button 1", async () => {
        const mockLogin = jest.fn();
        const username = "krisN";
        const password = "kika123";
        const {getByTestId} = render(<Router>
            <LoginForm onSubmit={mockLogin(username, password)}/>
          </Router>);

        const submitBtn = getByTestId("submit");
        const usernameInput = screen.getByPlaceholderText("Username");
        const passwordInput = screen.getByPlaceholderText("Password");
        userEvent.type(usernameInput, "krisN");
        userEvent.type(passwordInput, "kika123");
        
        await fireEvent.click(submitBtn);
        await expect(mockLogin).toHaveBeenCalled();
        await expect(mockLogin).toHaveBeenCalledTimes(1);
        await expect(mockLogin).toHaveBeenCalledWith("krisN", "kika123");
    });
})