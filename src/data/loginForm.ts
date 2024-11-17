import { Ilogin } from "../interfaces";

export const loginForm: Ilogin[] = [
  {
    name: "identifier",
    placeholder: "email@email.com",
    type: "email",
    validation: {
      required: "Please enter an email",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|io|co)$/i,
        message: "Enter a valid email",
      },
    },
  },
  {
    name: "password",
    placeholder: "enter your password",
    type: "password",
    validation: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters",
      },
    },
  },
];
