import { useEffect, useState } from "react";
import { Product } from "../types/products";
import ProductCardPage from "../components/ProductsElement/ProductCardPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductsListPage = () => {
    const [products, setProduct] = useState<Product[]>([]);
    
    const navigate = useNavigate();
    useEffect(() => {
         if(!localStorage.getItem("token")){
            navigate("/login");
            return;
        }
        axios.get('/products').then(({ data }) => setProduct(data)).catch(({ response }) => {
            console.log(response);
        });
    }, [navigate]);
    if (products.length === 0) return <>Bạn chưa có sản phẩm nào!</>
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Products List
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCardPage key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsListPage