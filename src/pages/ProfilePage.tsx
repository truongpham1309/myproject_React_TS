const ProfilePage = () => {
    return (
        <>
            <div className="shadow-[0 4px 8px 0 rgba(0,0,0,0.2)] transition-[0.3s] w-[90%] mx-auto my-0 block lg:flex mt-10">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        src="https://inkythuatso.com/uploads/thumbnails/800/2022/03/79d31e406fe3d3d7322b18666184911d-29-10-39-38.jpg"
                        alt="Avatar"
                        style={{ width: "80%", textAlign: "center", margin: "0 auto" }}
                        className="w-full object-contain object-center lg:h-full lg:w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
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
                </div>
            </div>
        </>
    )
}

export default ProfilePage
