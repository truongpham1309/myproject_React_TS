import FormSignUp from "../components/FormSignUp";

  const SignUpPage = () => {

  return (
    <div className="w-[80%] mx-auto mt-4">
      <div className="flex justify-center items-center w-full bg-white px-5 py-5">
        <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-2.5">
          <div className="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">
            <img
              src="https://www.tailwindtap.com/assets/components/form/createaccount/login.svg"
              alt="login"
              className="h-[500px]"
            />
          </div>
          <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-blue-800">
              Create Account
            </h1>
            <div className="w-full mt-5 sm:mt-8">
              <form action="">
                <FormSignUp />
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SignUpPage