import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [hasLogin, setHasLogin] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) setHasLogin(true);
  },[]);

  const handleLogout = () => {
    if(!confirm("Do you want logged out?")) return;
    localStorage.removeItem("token");
    const origin = window.location.origin;
    window.location.to = `${origin}/login`;
    setHasLogin(false);
  }

  const handleClickEvent = () => {
    const nav_bar = document.querySelector("#navbar-sticky")!;
    const hasClassHidden = nav_bar.classList.contains("hidden");

    if (hasClassHidden) {
      nav_bar.classList.remove("hidden");
    }
    else {
      nav_bar.classList.add("hidden");
    }
  }
  // Render
  return (
    <nav className="bg-white dark:bg-gray-900 relative w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="https://www.typescriptlang.org/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="data:image/png;base64,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"
            className="h-8 rounded-[5px]"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TypeScript
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={handleClickEvent}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Profile
              </Link>
            </li>
            {!hasLogin ? <li>
              <Link
                to={"/login"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Login
              </Link>
            </li> : <li>
              <Link
                to={"/admin/products"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Admin
              </Link>
            </li>}
            {!hasLogin ? "" : <li>
              <Link
                to={"#"}
                onClick={handleLogout}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Logout
              </Link>
            </li>}
            
          </ul>
        </div>
      </div>
    </nav>

  )
}
export default Header
