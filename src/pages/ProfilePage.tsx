const ProfilePage = () => {
    return (
        <>
            <div className="shadow-[0 4px 8px 0 rgba(0,0,0,0.2)] transition-[0.3s] w-[40%] mx-auto my-0 flex mt-10">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        src="https://inkythuatso.com/uploads/thumbnails/800/2022/03/79d31e406fe3d3d7322b18666184911d-29-10-39-38.jpg"
                        alt="Avatar"
                        style={{ width: "80%", textAlign: "center", margin: "0 auto" }}
                        className="w-full object-cover object-center lg:h-full lg:w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                    />
                </div>
                <div className="container w-full">
                    <h4>
                        <b>Pham Dinh Truong</b>
                    </h4>
                    <p>Tuổi: <strong>21</strong>, Quê quán: <strong>Hưng Yên</strong></p>
                    <p>MSV: <strong>PH30426</strong></p>
                    <p>Email: <strong>truongpdph30426@fpt.edu.vn</strong></p>
                    <p><strong>Trở thành 1 lập trình viên Fullstack</strong></p>
                    <p>Ngôn ngữ đã học: <strong>Javascript, PHP, C, Java</strong></p>

                    <div className="mt-5">
                        <a href="https://www.facebook.com/profile.php?id=100043412811811&locale=vi_VN" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-facebook hover:bg-blue-500 rounded-[50%]" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage