import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Product } from "../../types/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";

const ProductsUpdatePage = () => {
  const initalProduct: Product = {
    id: 0,
    title: "",
    image: "",
    price: 0,
    description: "",
    category: "",
    rating: {
      rate: 0,
      count: 0,
    }
  }
  const [categories, setCategories] = useState<string[]>([]);
  const [product, setProduct] = useState<Product>(initalProduct);
  const { productID } = useParams();

  const handleChangeInfoProduct = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      console.log(e.currentTarget);
      setProduct({...product, [e.currentTarget.name]: e.currentTarget.value});
      console.log(product);
  }

  const getProductDetail = async (id: number) => {
    try {
      const [{ data: category }, { data: product }] = await Promise.all([
        axios.get("https://fakestoreapi.com/products/categories"),
        axios.get(`https://fakestoreapi.com/products/${id}`)]);
      setProduct(product);
      setCategories(category);
    } catch (error) {
      toast.error("Failed!")
      console.log(error);
    }
  }

  useEffect(() => {
    toast.promise(
      getProductDetail(Number(productID)),{
        pending: "Get Product pending",
        success: "Get Product completed successfully👌",
        error: "Get Product failed! Please try again🤯",
      }
    )
  }, [productID]);

  return (
    <>
      {/* component */}
      <ToastContainer />
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
                  name="title"
                  value={product.title || "Đang cập nhật"}
                  onChange={handleChangeInfoProduct}
                  placeholder="Title*"
                />

                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="price"
                  value={product.price || "Đang cập nhật"}
                  onChange={handleChangeInfoProduct}
                  placeholder="Price*"
                />

                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
                  type="file"
                  name="image"
                  placeholder="Image*"
                />

                <select placeholder="Category" defaultValue={product.category} name="category" onChange={handleChangeInfoProduct} className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" id="">
                  <option>Category</option>
                  {categories.map((cate, index) => (
                    <option key={index} value={cate}>{cate}</option>
                  ))}
                </select>
              </div>
              <div className="my-4">
                <textarea
                  onChange={handleChangeInfoProduct}
                  placeholder="Description*"
                  name="decsription"
                  defaultValue={product.description}
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-green-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductsUpdatePage