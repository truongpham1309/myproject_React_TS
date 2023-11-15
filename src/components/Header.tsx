// import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="w-[80%] mx-auto">

            <nav className="navigation px-10 py-6 lg:py-3 bg-gray-900 bg-gradient-to-b from-gray-800 to-gray-900 text-sm text-white shadow">
                <div className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-three-dots navbar cursor-pointer" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </div>
                <ul id="menu" className="hidden lg:flex">
                    <a href="/"><li className="lg:px-3 py-3 hover:bg-white hover:text-black">
                        Home
                    </li></a>
                    <a href="/products"><li className="lg:px-3 py-3 hover:bg-white hover:text-black">
                        Products
                    </li></a>
                    <a href="/login"><li className="lg:px-3 py-3 hover:bg-white hover:text-black">
                        Login
                    </li></a>
                    <a href="/profile"><li className="lg:px-3 py-3 hover:bg-white hover:text-black relative group">
                        Profile
                    </li></a>
                </ul>
            </nav>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src="https://wp-themes.com/wp-content/themes/twentyeleven/images/headers/pine-cone.jpg"
                    alt="Pham Dinh Truong Image"
                    className="w-full object-cover object-center lg:h-full lg:w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                />
            </div>
        </header>
    )
}

export default Header