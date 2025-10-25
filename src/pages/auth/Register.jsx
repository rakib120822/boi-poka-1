import React, { use, useState } from "react";
import { Link } from "react-router";
import swal from "sweetalert";
import AuthContext from "../../context/AuthContext";
import { LuEyeClosed } from "react-icons/lu";
import { FaEye } from "react-icons/fa";

function Register() {
  const { signUp, updateInfo, setLoading, logOut, setUser } = use(AuthContext);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoUrl.value;

    signUp(email, password)
      .then(() =>
        updateInfo(displayName, photoURL)
          .then(() => {
            logOut()
              .then(() => {
                setLoading(false);
                setUser(null);
                swal("Good job!", "Please log in!", "success");
              })
              .catch((err) => swal(err.message, "error"));
          })
          .catch((err) => swal(err.message, "error"))
      )
      .catch((err) => swal(err.message, "error"));
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center  h-full">
      <title>BoiPoka - Register Page</title>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h1 className="text-black font-bold text-2xl text-center">
            Register
          </h1>

          <label className="floating-label my-2">
            <span>Name</span>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="displayName"
            />
          </label>

          <label className="floating-label my-2">
            <span>Photo URL</span>
            <input
              type="Text"
              className="input"
              placeholder="Photo URL"
              name="photoUrl"
            />
          </label>
          <label className="floating-label my-2">
            <span>Email</span>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
          </label>

          <div className="relative">
            <label className="floating-label">
              <span>Password</span>
              <input
                type={`${show ? "text" : "password"}`}
                className="input"
                placeholder="Password"
                name="password"
              />
            </label>
            <span
              onClick={() => setShow(!show)}
              className="absolute right-2.5 bottom-2 z-50"
            >
              {show ? <LuEyeClosed size={20} /> : <FaEye size={20} />}
            </span>
          </div>

          <div className="text-center mt-1">
            Have an Account?{" "}
            <Link to={"/auth/signin"} className="text-blue-500 underline">
              Please Sign In
            </Link>
          </div>
          <button className="btn bg-red-500 text-white mt-4">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
