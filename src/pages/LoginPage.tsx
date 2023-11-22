import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { FormValueLogin } from "../types/components";
import axios from "axios";

const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValueLogin>();

  const FormSubmitLogin: SubmitHandler<FormValueLogin> = async ({ username, password }) => {

    const { data } = await axios.post('https://fakestoreapi.com/auth/login', { username: username, password: password });
    if (data) {
      alert("Login successfuly");
      localStorage.setItem("token", JSON.stringify(data.token));
    } else {
      alert('username or password is incorrect');
    }
  }
  return (
    <div className="w-[80%] mx-auto mt-4">
      <div className="flex justify-center items-center w-full bg-white px-5 py-5">
        <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-2.5">
          <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
            <img
              src="https://www.tailwindtap.com/assets/components/form/createaccount/login.svg"
              alt="login"
              className="h-[500px]"
            />
          </div>
          <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-blue-800">
              Login Account
            </h1>
            <div className="w-full mt-5 sm:mt-8">
              <form action="" onSubmit={handleSubmit(FormSubmitLogin)}>
                <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="text"
                    id="username"
                    {...register("username", { required: true })}
                    placeholder="Enter your user..."
                  />
                  {errors.username && <p className="text-red-500">Username is required</p>}
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="password"
                    id="password"
                    {...register("password", { required: true })}
                    placeholder="Enter your password..."
                  />
                  {errors.username && <p className="text-red-500">Password is required</p>}
                  <div className="flex items-center gap-1 sm:gap-4 justify-start pl-2">
                    <input type="checkbox" className="text-blue-800" />
                    <h3 className="flex items-center whitespace-nowrap text-xs">
                      I agree to the{/* */}{" "}
                      <span className="text-blue-800">&nbsp;Terms</span>&nbsp;and
                      <span className="text-blue-800">&nbsp;Privacy Policy</span>.
                    </h3>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <button type="submit" className="md:mt-5 tracking-wide font-semibold bg-blue-800 text-white w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" >
                      <span>Sign In</span>
                    </button>
                  </div>
                  <div className="text-center text-blue-900"><Link to={"/signup"}>Create new account</Link></div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LoginPage