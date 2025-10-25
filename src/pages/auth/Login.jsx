import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import swal from "sweetalert";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

function Login() {
  const [show, setShow] = useState(false);
  const { signIn, setUser, setLoading } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
 
    signIn(email, password)
      .then((res) => {
        swal("Sign In", "You clicked the button!", "success");
        setUser(res.user);
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((err) => swal(err.message, "error"));
  };

  return (
    <div className="flex justify-center items-center  h-full">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h1 className="text-black font-bold text-2xl text-center">Login</h1>

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
              type={`${show? "text" : "password"}`}
              className="input"
              placeholder="Password"
              name="password"
            />
          </label>
          <span onClick={()=> setShow(!show)} className="absolute right-2.5 bottom-2 z-50">{show? <LuEyeClosed size={20}/>: <FaEye size={20}/>}</span>
         </div>

          <div className="flex justify-between items-center mt-2">
            <div>
              <label className="label  text-black">
                <input
                  type="checkbox"
                  className="checkbox border-1 border-black"
                />
                Remember me
              </label>
            </div>
            <Link
              to="/auth/reset-password"
              type="button"
              className="text-[#297BE6] underline "
            >
              Forget Password
            </Link>
          </div>
          <div className="text-center mt-1">
            Have not any Account?{" "}
            <Link to={"/auth/register"} className="text-blue-500 underline">
              Create An Account
            </Link>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
