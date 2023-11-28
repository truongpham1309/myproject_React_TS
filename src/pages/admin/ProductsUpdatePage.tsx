import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Product, initalProduct } from "../../types/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";

const ProductsUpdatePage = () => {
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

  const [categories, setCategories] = useState<string[]>([]);
  const [product, setProduct] = useState<Omit<Product, "_id">>(initalProduct);
  const { productID } = useParams();

  const handleChangeInfoProduct = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.currentTarget.name]: e.currentTarget.value });
  }

  const handleSubmitFormUpdate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let error: boolean = false;
    if (product.title.trim().length === 0) {
      error = true;
      toast.error("Title is required!");
    }
    if (product.price <= 0) {
      error = true;
      toast.error("Price cannot be less than or equal to 0!");
    }
    if (product.category.trim().length === 0) {
      error = true;
      toast.error("Category is required!");
    }

    if (error) return;

    toast.promise((async () => {
      try {
        const { data } = await axios.put(`https://hoadv-nodejs.vercel.app/products/${productID}`, { ...product });
        console.log(data);
        navigate("/admin/products");
      }
      catch (err) {
        console.log(error);
      }
    })(), {
      pending: "Updating...",
      success: "Success👌",
      error: "Failed ❌",
    })
  }
  useEffect(() => {
    toast.promise(
      (async () => {
        try {
          const [{ data: category }, { data: product }] = await Promise.all([
            axios.get("https://fakestoreapi.com/products/categories"),
            axios.get(`https://hoadv-nodejs.vercel.app/products/${productID}`)]);
          setProduct(product);
          setCategories(category);
        } catch (error) {
          toast.error("Failed!")
          console.log(error);
        }
      })(), {
      pending: "Get Product pending",
      success: "Get Product completed successfully👌",
      error: "Get Product failed! Please try again🤯",
    }
    )
  }, [productID]);

  return (
    <section className="bg-white dark:bg-gray-900 p-4 sm:ml-64">
            <ToastContainer />
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    Add a new product
                </h2>
                <form action="#" onSubmit={handleSubmitFormUpdate}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                onChange={handleChangeInfoProduct}
                                value={product.title}
                                id="name"
                                className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Type product name"
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="rate"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Rate
                            </label>
                            <input
                                type="text"
                                name="rate"
                                onChange={handleChangeInfoProduct}
                                id="rate"
                                value={product.rate}
                                className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Product rate"
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="price"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Price
                            </label>
                            <input
                                type="float"
                                onChange={handleChangeInfoProduct}
                                name="price"
                                value={product.price}
                                id="price"
                                className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="$2999"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="category"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Category
                            </label>
                            <select
                                id="category"
                                onChange={handleChangeInfoProduct}
                                defaultValue={product.category}
                                name="category"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                                <option value={""} >Select category</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="image"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Image
                            </label>
                            <input
                                type="text"
                                name="image"
                                value={product.image}
                                onChange={handleChangeInfoProduct}
                                id="image"
                                className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="link image"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                onChange={handleChangeInfoProduct}
                                rows={8}
                                value={product.description}
                                className="outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Your description products"
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex border-slate-300 dark:bg-green-500 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                        Update
                    </button>
                </form>
            </div>
        </section>
  )
}

export default ProductsUpdatePage