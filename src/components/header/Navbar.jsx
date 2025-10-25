import { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import swal from "sweetalert";

function Navbar() {
  const { user, logOut, setUser, loading } = use(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={"hover:underline transition duration-700 ease-in-out "}
        >
          Home
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              to="/readList"
              className={"hover:underline transition duration-700 ease-in-out "}
            >
              Read List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={"hover:underline transition duration-700 ease-in-out "}
            >
              Profile
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li>
        <NavLink
          to="/about"
          className={"hover:underline transition duration-700 ease-in-out "}
        >
          About
        </NavLink>
      </li>
    </>
  );

  const handleClick = () => {
    if (user) {
      logOut()
        .then(() => {
          setUser(null);
          swal("Sign Out", "You clicked the button!", "success");
        })
        .catch((err) => swal(err.message, "error"));
    } else {
      navigate("/auth/signin");
    }
  };

  const handleAvatarClick = () => {
    navigate("/profile");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="font-bold pl-4 text-xl">
          Boi<span className="text-red-600">Poka</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 ">{links}</ul>
      </div>

      <div className="navbar-end gap-5">
        {user ? (
          loading ? (
            "loading..."
          ) : (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar relative inline-block group"
              onClick={handleAvatarClick}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user
                      ? user?.photoURL
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
              {/* absolute top-full left-1/2 transform -translate-x-1/2 my-1 w-max max-w-xs bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 */}
              <span className="bg-black top-full left-1/2 my-1 transform -translate-x-1/2  w-max p-2  text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out whitespace-nowrap z-500  absolute text-white">
                {user ? user?.displayName : ""}
              </span>
            </div>
          )
        ) : (
          ""
        )}
        <button
          onClick={handleClick}
          className="btn btn-outline text-red-500 hover:bg-red-500 hover:text-white font-bold"
        >
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
