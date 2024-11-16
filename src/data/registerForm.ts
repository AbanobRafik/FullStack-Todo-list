import { Iregister } from "../interfaces";

export const RegisterForm: Iregister[] = [
  {
    name: "username",
    placeholder: "John Doe",
    type: "text",
    validation: {
      required: "Username is required!",
      minLength: {
        value: 3,
        message: "Username must be at least 3 characters",
      },
    },
  },
  {
    name: "email",
    placeholder: "email@email.com",
    type: "text",
    validation: {
      required: "Email is required!",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|io|co)$/i,
        message: "Please enter a valid email",
      },
    },
  },
  {
    name: "password",
    placeholder: "Password",
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
