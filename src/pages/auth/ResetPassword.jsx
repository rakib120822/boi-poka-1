import React, { use } from "react";
import { Link } from "react-router";
import AuthContext from "../../context/AuthContext";

function ResetPassword() {
  const { resetPassword } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    resetPassword(email)
      .then(() =>
        console.log(
          (window.location.href = "https://mail.google.com/mail/u/0/#inbox")
        )
      )
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="flex justify-center items-center  h-full">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h1 className="text-black font-bold text-2xl text-center">
            Reset Password
          </h1>

          <label className="floating-label my-2">
            <span>Email</span>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
          </label>

          <button className="btn btn-neutral mt-4">Reset</button>
        </fieldset>
      </form>
    </div>
  );
}

export default ResetPassword;
