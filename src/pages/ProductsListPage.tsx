import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../types";
import ProductCardPage from "../components/ProductsElement/ProductCardPage";

const ProductsListPage = () => {
    const [products, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(({ data }) => setProduct(data));
    }, []);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Products List
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCardPage key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsListPage