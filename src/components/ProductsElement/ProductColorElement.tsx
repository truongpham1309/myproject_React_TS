

const ProductColorElement = () => {
    return (
        <div className="mb-8">
            <h2 className="mb-2 text-xl font-bold dark:text-gray-400">Color</h2>
            <div className="flex flex-wrap -mb-2">
                <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                    <div className="w-6 h-6 bg-red-600 rounded-full" />
                </button>
                <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-6 h-6 bg-green-600 rounded-full" />
                </button>
                <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full" />
                </button>
                <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-6 h-6 rounded-full bg-sky-400" />
                </button>
            </div>
        </div>

    )
}

export default ProductColorElement