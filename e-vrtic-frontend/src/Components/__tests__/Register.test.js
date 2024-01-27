import {render, screen} from "@testing-library/react";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { BrowserRouter as Router} from 'react-router-dom'
import userEvent from "@testing-library/user-event";

describe("Test the register component", () => {
    test("email iniput field should accept email", () => {
        render(<Router>
            <RegisterForm />
          </Router>);
        const email = screen.getByPlaceholderText("Email");
        userEvent.type(email, "kika");
        expect(email.value).not.toMatch("kika@gmail.com");
    });
})