import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { Product } from "../types/products";
import ProductRating from "../components/ProductsElement/ProductRating";
import ProductCardPage from "../components/ProductsElement/ProductCardPage";

const ProductDetailPage = () => {
    const { productID } = useParams();
    const [product, setProduct] = useState<Product>();
    const [productsRelatedList, setProductsRelatedList] = useState<Product[]>([]);

    const getProductDetail = async (id: number) => {
        try {
            const [{ data: productDetail }, { data: productsRelated }] = await Promise.all([
                axios.get(`https://fakestoreapi.com/products/${id}`), 
                axios.get(`https://fakestoreapi.com/products`)]);
                
            if (!productDetail) {
                return;
            }
            console.log(productsRelated);

            setProduct(productDetail);

            const newProductsRelatedList = productsRelated
                .filter((product: Product) => product.category === productDetail.category
                    && product.id !== productDetail.id);

            setProductsRelatedList(newProductsRelatedList);
        } catch (error) {
            throw new Error("Error fetching");
        }

    }
    useEffect(() => {
        getProductDetail(Number(productID));
    }, [productID]);
    if (!product) return (<div className="font-bold text-3xl my-10 text-center">Product is not exist</div>);
    return (
        <section className="py-20 overflow-hidden bg-white font-poppins dark:bg-gray-800">
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="sticky top-0 z-50 overflow-hidden ">
                            <div className="relative mb-6 lg:mb-10" style={{ height: 450 }}>
                                <img
                                    src={product.image}
                                    alt=""
                                    className="object-contain w-full h-full "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 ">
                        <div className="lg:pl-20">
                            <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                                    New
                                </span>
                                <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                                    {product.title}
                                </h2>
                                <ProductRating rate={product.rating.rate} />
                                <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                    {product.description}
                                </p>
                                <div className="p-4 mb-8 border border-gray-300 dark:border-gray-700">
                                    <h2 className="mb-4 text-xl font-semibold dark:text-gray-400">
                                        Real time{" "}
                                        <span className="px-2 bg-blue-500 text-gray-50">{product.rating.count}</span>
                                        visitors right now!{" "}
                                    </h2>
                                    <div className="mb-1 text-xs font-medium text-gray-700 dark:text-gray-400">
                                        Hurry up! left 23 in Stock
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-600">
                                        <div
                                            className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                                            style={{ width: "45%" }}
                                        ></div>
                                    </div>
                                </div>
                                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                    <span>${product.price}</span>
                                </p>
                            </div>
                            {/* Color Element */}
                            {/* Size Element */}
                            <div className="flex flex-wrap items-center ">
                                <div className="mb-4 mr-4 lg:mb-0">
                                    <div className="w-28">
                                        <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                            <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                <span className="m-auto text-2xl font-thin">-</span>
                                            </button>
                                            <input
                                                type="number"
                                                className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                                placeholder="1"
                                            />
                                            <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 mr-4 lg:mb-0">
                                    <button className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                                        Buy Now
                                    </button>
                                </div>
                                <div className="mb-4 mr-4 lg:mb-0">
                                    <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className="bi bi-cart"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mb-4 lg:mb-0">
                                    <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            className=" bi bi-heart"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {productsRelatedList.map(product => (
                    <ProductCardPage product={product} key={product.id}/>
                ))}
            </div>
        </section>

    )
}

export default ProductDetailPage