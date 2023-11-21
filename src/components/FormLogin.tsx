import { Link } from "react-router-dom"

const FormLogin = () => {
    return (
        <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
            <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                type="email"
                id="username"
                placeholder="Enter your user..."
            />
            <input
                className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                type="password"
                id="password"
                placeholder="Enter your password..."
            />
            <div className="flex items-center gap-1 sm:gap-4 justify-start pl-2">
                <input type="checkbox" className="text-blue-800" />
                <h3 className="flex items-center whitespace-nowrap text-xs">
                    I agree to the{/* */}{" "}
                    <span className="text-blue-800">&nbsp;Terms</span>&nbsp;and
                    <span className="text-blue-800">&nbsp;Privacy Policy</span>.
                </h3>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <button className="md:mt-5 tracking-wide font-semibold bg-blue-800 text-white w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <Link to={"/signup"}><span>Sign Up</span></Link>
                </button>
                <button type="submit" className="form-sign-in md:mt-5 tracking-wide text-blue-800 font-semibold border-blue-800 border  w-full py-4 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span>Sign In</span>
                </button>
            </div>
        </div>

    )
}

export default FormLogin