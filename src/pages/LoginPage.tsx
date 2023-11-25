import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

type Acount = {
  username: string,
  password: string,
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [acount, setAcount] = useState<Acount>({ username: "", password: "" });
  const [errorUsername, setErrorUsername] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<string>('');
  const [hasLoading, setHasLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  });

  const handleChangeAcount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcount({ ...acount, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (acount.username.trim().length === 0) {
      setErrorUsername("Username is required");
      return;
    }
    else {
      setErrorUsername("");
    }
    if (acount.password.trim().length === 0) {
      setErrorPassword("Password is required");
      return;
    } else {
      setErrorPassword("")
    }

    try {
      setHasLoading(true);
      const { data } = await axios.post('https://fakestoreapi.com/auth/login', { username: acount.username, password: acount.password })
      setHasLoading(false);
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate("/admin/products");
      }
    } catch (error) {
      alert("Username or password incorrect");
      setHasLoading(false);
    }
  }
  return (
    <div className="w-[80%] mx-auto mt-4">
      <div className="flex justify-center items-center w-full bg-white px-5 py-5">
        {/* Same as */}
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
              <form action="" onSubmit={handleSubmit}>
                <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="text"
                    id="username"
                    name="username"
                    // value={acount.username}
                    onChange={handleChangeAcount}
                    placeholder="Enter your user..."
                  />
                  {<p className="text-red-500 text-sm">{errorUsername}</p> || ""}
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChangeAcount}
                    // value={acount.password}
                    placeholder="Enter your password..."
                  />
                  {<p className="text-red-500 text-sm">{errorPassword}</p> || ""}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <button type="submit" className="md:mt-5 tracking-wide font-semibold bg-blue-800 text-white w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" >
                      <span>{!hasLoading ? "" : (<i className="fa-solid fa-circle-notch fa-spin"></i>)}&nbsp;Sign In</span>
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