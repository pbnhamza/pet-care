import React, { useContext } from "react";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Loader from "../../Components/Loader/Loader";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <MyContainer>
      {user ? (
        <div
          className="flex justify-center items-center flex-col gap-5 py-4 "
          style={{
            background:
              "linear-gradient(90deg,rgba(42, 151, 155, 0.5) 0%, rgba(11, 148, 68, 0.25) 60%, rgba(83, 237, 198, 0.45) 100%)",
          }}
        >
          <div
            className="rounded"
            style={{
              background:
                "linear-gradient(90deg,rgba(42, 151, 155, 0.15) 0%, rgba(11, 148, 68, 0.25) 60%, rgba(83, 237, 198, 45) 100%)",
            }}
          >
            <div className="flex justify-center items-center py-4">
              <img
                src={user?.photoURL || ""}
                className="max-w-sm  w-[150px] h-[150px] rounded-full shadow-2xl"
              />
            </div>
            <div className=" bg-primary rounded space-y-2 p-4 w-[400px] ">
              <div className="flex justify-center items-center gap-5 text-xl">
                <div>
                  <h1 className="font-semibold text-white py-1 text-right">
                    Name:
                  </h1>
                  <h1 className="font-semibold text-white py-1 text-right">
                    Email:
                  </h1>
                </div>
                <div>
                  <h1 className="font-semibold text-white py-1">
                    {user?.displayName}
                  </h1>
                  <h1 className="font-semibold text-white py-1">
                    {user?.email}
                  </h1>
                </div>
              </div>
              <div className="flex justify-center py-4">
                <Link to={"/update"} className="btn btn-primary bg-secondary">
                  Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader></Loader>
      )}
    </MyContainer>
  );
};

export default Profile;
