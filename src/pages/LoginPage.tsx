import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import SignInForm from "../components/forms/SignInForm";

type Acount = {
  email: string,
  password: string,
}
const LoginPage = () => {
  const navigate = useNavigate();
  const [acount, setAcount] = useState<Acount>({ email: "", password: "" });
  const [hasLoading, setHasLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/admin/products");
  });

  const handleChangeAcount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcount({ ...acount, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (acount.email.trim().length === 0) {
      toast.error("Email is required");
      return;
    }
   
    if (acount.password.trim().length === 0) {
      toast.error("Password is required");
      return;
    } 

    try {
      setHasLoading(true);
      const { data } = await axios.post('/auth/login', { email: acount.email, password: acount.password })
      setHasLoading(false);
      if (data.token) {
        localStorage.setItem('token', data.token);
        toast.success("Login successful");
        navigate("/admin/products");
        window.location.reload();
        return;
      }
    } catch (error) {
      toast.error("Email or password incorrect");
      setHasLoading(false);
    }
  }
  return (
    <div className="w-[80%] mx-auto mt-4 dark:bg-gray-700">
      <ToastContainer />
      <div className="flex justify-center items-center w-full bg-white px-5 py-5 dark:bg-gray-700">
        {/* Same as */}
        <div className="dark:bg-gray-800 xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-2.5">
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
              <SignInForm 
              isLogin={true}
              onChangeInput={handleChangeAcount} 
              isInputFullName={false}
              onSubmitForm={handleSubmit} 
              hasLoading={hasLoading}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage