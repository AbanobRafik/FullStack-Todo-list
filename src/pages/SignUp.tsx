import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import InputError from "../components/ui/InputError";
import { RegisterForm } from "../data/registerForm";

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

  // ** Handlers
  const onSubmit: SubmitHandler<formField> = (data) => {
    console.log(data);
  };

  // ** Render
  const renderRegisterForm = RegisterForm.map(
    ({ name, placeholder, type, validation }, index) => (
      <div key={index}>
        <label className="block text-sm font-medium text-gray-700">
          {name}
        </label>
        <Input
          type={type}
          className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder={placeholder}
          {...register(name, validation)}
        />
        {errors[name] && errors[name].type === "required" && (
          <InputError>{errors[name].message}</InputError>
        )}
        {errors[name] && errors[name].type === "minLength" && (
          <InputError>{errors[name].message}</InputError>
        )}
        {errors[name] && errors[name].type === "pattern" && (
          <InputError>{errors[name].message}</InputError>
        )}
      </div>
    )
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          Register to ToDoze
        </h2>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {renderRegisterForm}
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
