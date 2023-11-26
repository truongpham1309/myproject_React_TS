import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Product } from "../../types/products";
import axios from "axios";
const AdminHomePage = () => {
  const navigate = useNavigate();
  const [productsList, setProductsList] = useState<Product[]>([]);

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
  const handleRemoveProducts = async (e: React.SyntheticEvent<HTMLElement>) => {
    const idProduct = e.currentTarget.dataset.id;
    if (!confirm("Are you sure you want to remove")) return;

    toast.promise((async () => {
      try {
        await axios.delete(`https://fakestoreapi.com/users/${idProduct}`);
        const newProductsList = productsList.filter(p => p.id !== Number(idProduct));
        setProductsList(newProductsList);
        return;
      } catch (error) {
        console.log(error);
      }
    })(),{
      pending: "Deleting...",
      success: "Successfully deleted ✅",
      error: "Failed to delete ❌"
    })

  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProductsList(data);
      } catch (error) {
        toast.error("Server error: " + error);
      }
    })();
  }, [])

  return (
    <div className="font-bold text-3xl text-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ fontSize: "15px" }}
      />
      <h1 className="font-bold text-center py-5  dark:bg-gray-700 dark:text-gray-400">Products List Admin </h1>
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
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
              <th scope="col" className="px-6 py-3">
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
              <th scope="col" className="px-6 py-3">
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
              <th scope="col" className="px-6 py-3 text-center">
                <a href="/admin/create_product"><button className="bg-green-500 py-3 px-5 rounded-md text-white">CREATE PRODUCTS</button></a>
              </th>
            </tr>
          </thead>
          <tbody>
            {productsList.map(product => (
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{product.id}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.title}
                </th>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={`/admin/update_product/${product.id}`}
                    className="font-medium text-white hover:underline"
                  ><button className="bg-green-500 py-2 px-6 rounded-md">
                      Edit
                    </button>
                  </a>
                  <button data-id={product.id} onClick={handleRemoveProducts} className="text-white ml-3 bg-red-500 py-2 px-6 rounded-md">
                    Remove
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AdminHomePage