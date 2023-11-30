import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import { Product } from "../../types/products";
import FormSearchNameProducts from "../../components/forms/FormSearchNameProducts";
import axios from "axios";

const AdminHomePage = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const typingProduct = useRef<Product[]>(productsList);

  const handleRemoveProducts = async (e: React.SyntheticEvent<HTMLElement>) => {
    const idProduct = e.currentTarget.dataset.id;
    if (!confirm("Are you sure you want to remove")) return;
    toast.promise((async () => {
      try {
        await axios.delete(`/products/${idProduct}`);
        const newProductsList = productsList.filter(p => p._id !== idProduct);
        typingProduct.current = newProductsList;
        setProductsList(newProductsList);
        return;
      } catch (error) {
        console.log(error);
      }
    })(), {
      pending: "Deleting...",
      success: "Successfully deleted ✅",
      error: "Failed to delete ❌"
    })
  }

  const handleChangeSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProductList = typingProduct.current.filter(p => (p.title.toLowerCase()).startsWith(e.target.value.toLowerCase()) || (p.title.toLowerCase()).endsWith(e.target.value.toLowerCase()));
    setProductsList(newProductList);
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/products");
        setProductsList(data);
        typingProduct.current = data;
      } catch (error) {
        toast.error("Server error: " + error);
        console.log(error);
      }
    })();
  }, [])
  return (
    <div className="px-2 sm:ml-64">
      <div className="font-bold text-3xl text-center">
        <h1 className="font-bold text-center py-5 uppercase dark:bg-gray-700 dark:text-gray-400">Products List Admin </h1>
        <div className="relative overflow-x-auto shadow-md">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <FormSearchNameProducts onChangeInput={handleChangeSearchName}/>
            </div>
          </form>

          <table className="w-full rounded-md text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Product Name
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  <div className="flex items-center">
                    Category
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  <div className="flex items-center">
                    Price
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-2 py-3 text-right">
                  <a href="/admin/create_product"><button className="bg-green-500 text-center mx-auto py-3 px-5 rounded-md text-white">CREATE PRODUCTS</button></a>
                </th>
              </tr>
            </thead>
            <tbody>
              {productsList.map((product, index) => (
                <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">{index + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 break-words dark:text-white"
                  >
                    {product.title}
                  </th>
                  <td className="px-3 py-4">{product.category}</td>
                  <td className="px-3 py-4">${product.price}</td>
                  <td className="px-2 py-4 text-right flex">
                    <a
                      href={`/admin/update_product/${product._id}`}
                      className="font-medium text-white hover:underline"
                    ><button className="bg-green-500 py-2 px-6 rounded-md flex">
                        Edit
                      </button>
                    </a>
                    <button data-id={product._id} onClick={handleRemoveProducts} className="text-white ml-3 bg-red-500 py-2 px-6 rounded-md">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default AdminHomePage