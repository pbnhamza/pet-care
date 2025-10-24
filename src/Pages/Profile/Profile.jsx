import React from "react";
import MyContainer from "../../Components/MyContainer/MyContainer";
import image from "../../assets/login.png";

const Profile = () => {
  return (
    <MyContainer>
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
              src={image}
              className="max-w-sm  w-[150px] h-[150px] rounded-full shadow-2xl"
            />
          </div>
          <div className=" bg-primary rounded space-y-2 p-4 w-[400px] ">
            <div className="flex justify-center items-center gap-5 text-xl">
              <div>
                <h1 className="font-semibold text-white py-2 text-right">
                  User Name:
                </h1>
                <h1 className="font-semibold text-white py-2 text-right">
                  Email:
                </h1>
              </div>
              <div>
                <h1 className="font-semibold text-white py-2">hamza</h1>
                <h1 className="font-semibold text-white py-2">
                  hamza@email.com
                </h1>
              </div>
            </div>
            <div className="flex justify-center py-4">
              <button className="btn btn-primary bg-secondary">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Profile;
