import React from 'react'
import errorImg from "../../assets/error-404.png"
import { useNavigate } from 'react-router'

function ErrorPage() {
    const navigate = useNavigate();
  return (
   <div className="max-w-[1200px] mx-auto  flex flex-col justify-center items-center my-10 text-center gap-5">
    <title>Error - 404</title>
      <img src={errorImg} alt="error page image" />

      <div>
        <h1 className="font-semibold text-5xl mb-3">Oops,Page not found!</h1>
        <p className="text-xl text-[#627382]">
          The page you are looking for is not available
        </p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] text-white rounded-lg px-6 py-2 font-semibold "
      >
        Go Back!
      </button>
    </div>
  )
}

export default ErrorPage
