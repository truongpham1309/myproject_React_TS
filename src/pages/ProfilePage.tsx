const ProfilePage = () => {
    return (
        <>
            <div className="shadow-[0 4px 8px 0 rgba(0,0,0,0.2)] transition-[0.3s] w-[40%] mx-auto my-0 flex mt-10">
                <div>
                    <img
                        src="https://inkythuatso.com/uploads/thumbnails/800/2022/03/79d31e406fe3d3d7322b18666184911d-29-10-39-38.jpg"
                        alt="Avatar"
                        style={{ width: "80%", textAlign: "center", margin: "0 auto" }}
                    />
                </div>
                <div className="container">
                    <h4>
                        <b>Pham Dinh Truong</b>
                    </h4>
                    <p>Tuổi: 21, Quê quán: Hưng Yên</p>
                    <p>Trở thành 1 lập trình viên Fullstack</p>
                    <p>Ngôn ngữ đã học: Javascript, PHP, C, Java</p>
                </div>
            </div>
        </>
    )
}

export default ProfilePage