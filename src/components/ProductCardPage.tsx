import { Link } from "react-router-dom"
import { Product } from "../types"
import ProductRating from "./ProductRating"

type ProductCardProps = {
    product: Product
}

const ProductCardPage: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={product.image}
                    alt="Front of men's Basic Tee in black."
                    className="w-full object-contain object-center lg:h-full lg:w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={"/products"}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.title}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    <ProductRating product={product} />

                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
            </div>
        </div>
    )
}

export default ProductCardPage