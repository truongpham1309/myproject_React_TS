const Header = () => {

    return (
        <header className="w-[80%] mx-auto">
            <div className="flex flex-row py-14 px-20">
                <div className="flex-grow">
                    <h1 className="text-3xl font-semibold">PHAM DINH TRUONG</h1>
                    <h2 className="text-sm text-gray-500">
                        A Frontend Developer
                    </h2>
                </div>
                <div className="">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-28 h-10 focus:w-48 px-3 py-1 text-sm text-gray-400 focus:text-black placeholder-gray-600 border border-gray-300 outline-none focus:outline-none rounded-lg shadow-inner transition-all duration-300"
                    />
                </div>
            </div>
            <nav className="navigation px-20 bg-gray-900 bg-gradient-to-b from-gray-800 to-gray-900 text-sm text-white shadow">
                <ul className="flex">
                    <a href="/"><li className="px-3 py-3 hover:bg-white hover:text-black">
                        Home
                    </li></a>
                    <a href="/products"><li className="px-3 py-3 hover:bg-white hover:text-black">
                        Products
                    </li></a>
                    <a href="/login"><li className="px-3 py-3 hover:bg-white hover:text-black">
                        Login
                    </li></a>
                    <a href="/profile"><li className="px-3 py-3 hover:bg-white hover:text-black relative group">
                        Profile
                    </li></a>
                </ul>
            </nav>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
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