const HomePage = () => {
    return (
        <div className="md:my-8 my-0 mx-auto max-w-screen-lg bg-white md:border-t-2 border-gray-400">          
            <div className="flex py-12 px-20">
                <div className="flex-grow grid grid-cols-1 gap-8 mr-20 divide-y">
                    <article>
                        <header>
                            <h1 className="pr-20 pb-4">
                                <a href="#" className="text-2xl font-semibold hover:text-blue-500">
                                    Worth A Thousand Words
                                </a>
                            </h1>
                            <div className="text-xs text-gray-600">
                                <span className="">Posted on </span>
                                <a
                                    href="#"
                                    title="4:33 am"
                                    rel="bookmark"
                                    className="text-blue-500 font-semibold hover:underline"
                                >
                                    <time dateTime="2008-10-17T04:33:51+00:00">October 17, 2008</time>
                                </a>
                            </div>
                        </header>
                        <div className="py-8">
                            <div className="p-4 mb-6 w-max bg-gray-200">
                                <img
                                    loading="lazy"
                                    className="wp-image-59"
                                    alt="Boat"
                                    src="https://wpdotorg.files.wordpress.com/2008/11/boat.jpg"
                                    width={435}
                                    height={288}
                                />
                                <p className="pt-4 pb-2 text-sm text-gray-600 font-serif">— Boat</p>
                            </div>
                            <p>Boat.</p>
                        </div>
                        <footer className="text-xs text-gray-600">
                            <span>Posted in</span>
                            <a
                                href="#"
                                rel="category"
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                Uncategorized
                            </a>
                            <span> | </span>
                            <span>Tagged</span>
                            <a
                                href="#"
                                rel="tag"
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                boat
                            </a>
                            ,{" "}
                            <a
                                href="#"
                                rel="tag"
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                lake
                            </a>
                        </footer>
                    </article>
                    <article>
                        <header>
                            <h1 className="pr-20 pb-4 mt-12">
                                <a href="#" className="text-2xl font-semibold hover:text-blue-500">
                                    Tailwind is gud
                                </a>
                            </h1>
                            <div className="text-xs text-gray-600">
                                <span className="">Posted on </span>
                                <a
                                    href="#"
                                    title="4:33 am"
                                    rel="bookmark"
                                    className="text-blue-500 font-semibold hover:underline"
                                >
                                    <time dateTime="2008-09-05T19:39:12+00:00">
                                        September 5, 2008
                                    </time>
                                </a>
                            </div>
                        </header>
                        <div className="py-8">
                            <p>
                                <a
                                    href="https://tailwindcss.com/"
                                    className="text-blue-500 hover:underline"
                                >
                                    download
                                </a>{" "}
                                le tailwind. its da best in da world. the{" "}
                                <a
                                    href="https://wordpress.org/themes/twentyeleven/"
                                    className="text-blue-500 hover:underline"
                                >
                                    theme
                                </a>{" "}
                                original.
                            </p>
                        </div>
                        <footer className="text-xs text-gray-600">
                            <span>Posted in</span>
                            <a
                                href="#"
                                rel="category"
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                Uncategorized
                            </a>
                        </footer>
                    </article>
                    <article>
                        <header>
                            <h1 className="pr-20 pb-4 mt-12">
                                <a href="#" className="text-2xl font-semibold hover:text-blue-500">
                                    More Tags
                                </a>
                            </h1>
                            <div className="text-xs text-gray-600">
                                <span className="">Posted on </span>
                                <a
                                    href="#"
                                    title="4:33 am"
                                    rel="bookmark"
                                    className="text-blue-500 font-semibold hover:underline"
                                >
                                    <time dateTime="2008-06-21T00:09:24+00:00">June 21, 2008</time>
                                </a>
                            </div>
                        </header>
                        <div className="py-8">
                            <p>More of these posts need tags.</p>
                        </div>
                        <footer className="text-xs text-gray-600">
                            <span>Posted in</span>
                            <a
                                href="#"
                                rel="category"
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                Uncategorized
                            </a>
                            <span> | </span>
                            <span>Tagged</span>
                            <a
                                href="#"
                                rel="tag"
                                className="text-blue-500 font-semibold hover:underline"
                            >
                                Tailwind
                            </a>
                        </footer>
                    </article>
                </div>
                <aside className="w-48 text-sm text-gray-500">
                    <h3 className="mb-2 uppercase text-xs font-mono">Archives</h3>
                    <ul className="mb-8 list-square font-semibold">
                        <li>
                            <a href="#" className="text-blue-500 hover:underline">
                                October 2008
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:underline">
                                September 2008
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-blue-500 hover:underline">
                                June 2008
                            </a>
                        </li>
                    </ul>
                    <h3 className="mb-2 uppercase text-xs font-mono">Meta</h3>
                    <ul className="mb-8 list-square font-semibold">
                        <li>
                            <a href="#" className="text-blue-500 hover:underline">
                                Log in
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>

    )
}

export default HomePage