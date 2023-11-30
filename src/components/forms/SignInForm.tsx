import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    isInputFullName: boolean,
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmitForm: (e: React.SyntheticEvent) => void,
    hasLoading: boolean,
    isLogin: boolean
}

const SignInForm: React.FC<Props> = ({ isInputFullName, onChangeInput, onSubmitForm, hasLoading, isLogin }) => {
    return (
        <form action="" onSubmit={onSubmitForm}>
            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">


                {!isInputFullName || (<input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="text"
                    id="fullname"
                    name="fullname"
                    // value={acount.email}
                    onChange={onChangeInput}
                    placeholder="Enter your fullname..."
                />)}
                <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="text"
                    id="email"
                    name="email"
                    // value={acount.email}
                    onChange={onChangeInput}
                    placeholder="Enter your email..."
                />
                {/* {<p className="text-red-500 text-sm">{erroremail}</p> || ""} */}
                <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="password"
                    id="password"
                    name="password"
                    onChange={onChangeInput}
                    // value={acount.password}
                    placeholder="Enter your password..."
                />
                {/* {<p className="text-red-500 text-sm">{errorPassword}</p> || ""} */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <button type="submit" className="md:mt-5 tracking-wide font-semibold bg-blue-800 text-white w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" >
                        <span>{!hasLoading ? "" : (<i className="fa-solid fa-circle-notch fa-spin"></i>)}&nbsp;{isLogin ? ("Login") : ("Sign Up")}</span>
                    </button>
                </div>

                {isLogin ? (<div className="text-center text-blue-900">
                    <Link to={"/signup"}>Create new account!</Link>
                </div>)
                    :
                    (<div className="text-center text-blue-900">
                        <Link to={"/login"}>You have an account!</Link>
                    </div>)}

            </div>
        </form>
    )
}

export default SignInForm