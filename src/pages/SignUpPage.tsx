import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignUpAcount } from "../types/users";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";
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
  }

  const handleSubmitSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault();

    toast.promise((async () => {
      try {
        await axios.post("/auth/register", account);

        const { data } = await axios.post("/auth/login", {email: account.email, password:account.password});
        if(data.token){
          localStorage.setItem("token", data.token);
          navigate("/admin/dashboard");
        }else{
          navigate("/login");
        }
      } catch (error) {
        console.log(error?.response?.data.messages);
        const { messages } = error?.response?.data;

        messages.map((m: string) => toast.error(m));
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
              <form action="" onSubmit={handleSubmitSignUp}>
                <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="text"
                    id="fullname"
                    name="fullname"
                    // value={acount.email}
                    onChange={handleChangeAcount}
                    placeholder="Enter your fullname..."
                  />
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="text"
                    id="email"
                    name="email"
                    // value={acount.email}
                    onChange={handleChangeAcount}
                    placeholder="Enter your email..."
                  />
                  {/* {<p className="text-red-500 text-sm">{erroremail}</p> || ""} */}
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChangeAcount}
                    // value={acount.password}
                    placeholder="Enter your password..."
                  />
                  {/* {<p className="text-red-500 text-sm">{errorPassword}</p> || ""} */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <button type="submit" className="md:mt-5 tracking-wide font-semibold bg-blue-800 text-white w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" >
                      <span>{!hasLoading ? "" : (<i className="fa-solid fa-circle-notch fa-spin"></i>)}&nbsp;Sign Up</span>
                    </button>
                  </div>
                  <div className="text-center text-blue-900"><Link to={"/login"}>You have an account!</Link></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SignUpPage