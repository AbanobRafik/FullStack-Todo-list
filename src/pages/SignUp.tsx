import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import InputError from "../components/ui/InputError";

type formField = {
  username: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formField>();

  const onSubmit: SubmitHandler<formField> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          Register to ToDoze
        </h2>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <Input
              type="text"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="John Doe"
              {...register("username", {
                required: "Username is required!",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
            />
            {errors?.username && errors?.username.type === "required" && (
              <InputError>{errors?.username.message}</InputError>
            )}
            {errors?.username && errors?.username.type === "minLength" && (
              <InputError>{errors?.username.message}</InputError>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              {...register("email", {
                required: "Please enter your email!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|io|co)$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors?.email && errors.email.type === "required" && (
              <InputError>{errors.email.message}</InputError>
            )}
            {errors?.email && errors.email.type === "pattern" && (
              <InputError>{errors.email.message}</InputError>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors?.password && errors.password.type === "required" && (
              <InputError>{errors.password.message}</InputError>
            )}
            {errors?.password && errors.password.type === "minLength" && (
              <InputError>{errors.password.message}</InputError>
            )}
          </div>
          <Button
            width="w-full"
            className="w-full bg-indigo-600 rounded-md hover:bg-indigo-800 transition duration-300 font-semibold"
          >
            SignUp
          </Button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
