import axios from "axios";
import { useEffect, useState } from "react"
import { Product, initalProduct } from "../../types/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ProductsCreatePage = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [productAdd, setProductAdd] = useState<Product>(initalProduct);
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            toast.info("You need to login!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/login");
        }
    });

    const handleChangeInfoProductAdd = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setProductAdd({ ...productAdd, [e.currentTarget.name]: e.currentTarget.value });
        console.log(productAdd);
    }

    const handleSubmitFormAddProduct = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let valid = false;
        if (productAdd.title.trim().length === 0) {
            valid = true;
            toast.error("Title is required! Please try again");
        }
        if (productAdd.price <= 0) {
            valid = true;
            toast.error("Price cannot be less than or equal to 0!");
        }
        if (productAdd.category.trim().length === 0) {
            valid = true;
            toast.error("Category cannot be empty!");
        }
        if (productAdd.description.trim().length === 0) {
            valid = true;
            toast.error("Description cannot be empty!");
        }

        if (valid) return;

        toast.promise((async () => {
            try {
                const { data } = await axios.post("https://fakestoreapi.com/products", { ...productAdd });
                console.log(data);
                return;
            } catch (error) {
                console.log(error);
            }
        })(), {
            pending: "Creating...",
            success: "Create Successfully ✅",
            error: "Create Failed ❌",
        })
    }


    useEffect(() => {
        (async () => {
            try {
                const { data: categories } = await axios.get("https://fakestoreapi.com/products/categories");
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
                <ToastContainer />
                <div className="container mx-auto my-4 px-4 lg:px-20">
                    <form action="" onSubmit={handleSubmitFormAddProduct}>
                        <div className="w-full p-8 my-4 md:px-12 lg:w-full lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold uppercase text-3xl">
                                    Create a <br /> products
                                </h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="text"
                                    value={productAdd.title}
                                    name="title"
                                    onChange={handleChangeInfoProductAdd}
                                    placeholder="Title*"
                                />
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="number"
                                    name="price"
                                    onChange={handleChangeInfoProductAdd}
                                    value={productAdd.price}
                                    placeholder="Price*"
                                />
                                <input
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
                                    type="file"
                                    placeholder="Image*"
                                    onChange={handleChangeInfoProductAdd}
                                />
                                <select placeholder="Category" onChange={handleChangeInfoProductAdd} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name="category" id="">
                                    <option value="">Category</option>
                                    {categories.map((cate, index) => (
                                        <option key={index} value={cate}>{cate}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="my-4">
                                <textarea
                                    placeholder="Description*"
                                    name="description"
                                    onChange={handleChangeInfoProductAdd}
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="my-2 w-1/2 lg:w-1/4">
                                <button
                                    type="submit"
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