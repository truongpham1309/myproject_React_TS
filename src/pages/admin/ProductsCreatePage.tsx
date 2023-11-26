import axios from "axios";
import { useEffect, useState } from "react"

const ProductsCreatePage = () => {
    const [categories, setCategories] = useState<string[]>([]);


    useEffect(() => {
        (async () => {
            try {
                const { data: categories} = await axios.get("https://fakestoreapi.com/products/categories");
                setCategories(categories);
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    return (
        <>
            {/* component */}
            <div className="flex justify-center items-center w-full bg-white">
                {/* COMPONENT CODE */}
                <div className="container mx-auto my-4 px-4 lg:px-20">
                    <form action="">
                        <div className="w-full p-8 my-4 md:px-12 lg:w-full lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold uppercase text-5xl">
                                    Create a <br /> products
                                </h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Title*"
                                />
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Price*"
                                />
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
                                    type="file"
                                    placeholder="Image*"
                                />
                                <select placeholder="Category" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="" id="">
                                    <option value="">Category</option>
                                    {categories.map((cate, index) => (
                                        <option key={index} value={cate}>{cate}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="my-4">
                                <textarea
                                    placeholder="Description*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="my-2 w-1/2 lg:w-1/4">
                                <button
                                    className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default ProductsCreatePage