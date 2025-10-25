import React, { use, useState } from "react";
import AuthContext from "../../context/AuthContext";
import swal from "sweetalert";

function Profile() {
  const [update, setUpdate] = useState(false);
  const { user, updateInfo, setUser } = use(AuthContext);

  const handleUpdata = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value? e.target.displayName.value : user?.displayName;
    const photoURL = e.target.photoURL.value ? e.target.photoURL.value : user?.photoURL;
  

    updateInfo( displayName, photoURL)
      .then(() => {
        swal("Updated!", "You clicked the button!", "success");
        setUser({ ...user, displayName, photoURL });
        setUpdate(!update);
      })
      .catch((err) => swal(err, "error"));
  };

  return (
    <div className=" flex justify-center items-center my-10 ">
      <title>{`Profile - ${user?.displayName}`}</title>
      <div className=" bg-base-200 border border-red-300 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={
              user
                ? user?.photoURL
                : "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            }
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            {update ? (
              <div className="card-body">
                <form onSubmit={handleUpdata}>
                  <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="name"
                      name="displayName"
                    />
                    <label className="label">Photo URL </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Photo URL"
                      name="photoURL"
                    />
                    <button type="submit" className="btn bg-red-500 text-white mt-4">
                      Update
                    </button>
                  </fieldset>
                </form>
              </div>
            ) : (
              <div>
                <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                <p className="py-6">{user?.email}</p>
                <button
                  onClick={() => setUpdate(!update)}
                  className="btn bg-red-500 text-white"
                >
                  update
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
