import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import InputError from "../components/ui/InputError";
import { loginForm } from "../data/loginForm";
import { useState } from "react";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IerrorResponse } from "../interfaces";

type formField = {
  identifier: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formField>();

  // ** states
  const [isLoading, setIsLoading] = useState(false);

  // ** handlers
  const onSubmit: SubmitHandler<formField> = async (data) => {
    console.log("Submitted Data:", data); // Debugging
    setIsLoading(true);
    try {
      const { status } = await axiosInstance.post("/auth/local", data);
      if (status === 200) {
        toast.success(
          "You login successfully, You will navigate to homepage after 4 seconds",
          {
            duration: 4000,
            position: "top-center",
            style: { backgroundColor: "green", color: "white" },
            icon: "👏",
          }
        );
      }
    } catch (error) {
      console.error("API Error:", error); // Debugging
      const errorobj = error as AxiosError<IerrorResponse>;
      toast.error(`${errorobj.response?.data.error.message}`, {
        duration: 4000,
        position: "top-center",
        style: { backgroundColor: "#800000", color: "white" },
      });
    } finally {
      setIsLoading(false);
    }
  };

  //** renders
  const renderLoginForm = loginForm.map(
    ({ name, placeholder, type, validation }, index) => (
      <div key={index}>
        <label className="block text-sm font-medium text-gray-700">Email</label>
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          Login to ToDoze
        </h2>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {renderLoginForm}
          <Button
            width="w-full"
            isLoading={isLoading}
            className="w-full bg-indigo-600 rounded-md  disabled:hover:bg-indigo-400 disabled:cursor-not-allowed hover:bg-indigo-800 transition duration-300 font-semibold"
          >
            Login
          </Button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
