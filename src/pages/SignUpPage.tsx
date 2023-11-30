import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { SignUpAcount } from "../types/users";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
import FormLoginSignUp from "../components/forms/SignInForm";
const SignUpPage = () => {

  const [hasLoading, setHasLoading] = useState(false);
  const [account, setAcount] = useState<Omit<SignUpAcount, "_id">>({
    fullname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChangeAcount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcount({ ...account, [e.target.name]: e.target.value });
    console.log(account);

  }

  const loginAccount = async () => {
    try {
      const { data } = await axios.post("/auth/login", { email: account.email, password: account.password });
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/admin/dashboard");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }

  }

  const handleSubmitSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault();

    toast.promise((async () => {
      try {
        await axios.post("/auth/register", account);
        loginAccount();
      } catch (error) {
        // some code that handles the error
        toast.error("Failed to login");
        console.log(error);

      }
    })(), {
      pending: "Waiting...",
    });
    setHasLoading(false);

  }

  return (
    <div className="w-[80%] mx-auto mt-4">
      <ToastContainer />
      <div className="flex justify-center items-center w-full bg-white px-5 py-5 dark:bg-gray-700">
        <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-2.5 dark:bg-gray-800">
          <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
            <img
              src="https://www.tailwindtap.com/assets/components/form/createaccount/login.svg"
              alt="login"
              className="h-[500px]"
            />
          </div>
          <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-blue-800">
              Create Account
            </h1>
            <div className="w-full mt-5 sm:mt-8">
              <FormLoginSignUp
                isLogin={false}
                isInputFullName={true}
                hasLoading={hasLoading}
                onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeAcount(e)}
                onSubmitForm={(e: React.SyntheticEvent) => handleSubmitSignUp(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SignUpPage