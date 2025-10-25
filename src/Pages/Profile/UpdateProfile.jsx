import { useContext, useState } from "react";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { updateProfileFunc } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photo, setPhotos] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfileFunc(name, photo)
      .then(() => {
        if (name && photo) {
          toast.success("data update successful");

          setName("");
          setPhotos("");
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
    navigate("/profile");
  };
  return (
    <MyContainer>
      <div className="flex justify-center items-center">
        <div
          className="card-body rounded  w-96 flex justify-center items-center "
          style={{
            background:
              "linear-gradient(90deg,rgba(42, 151, 155, 0.15) 0%, rgba(11, 148, 68, 0.25) 56%, rgba(83, 237, 198, 0.45) 100%)",
          }}
        >
          <div className="flex justify-center items-center py-4">
            <img
              src={photo}
              className="max-w-sm  w-[150px] h-[150px] rounded-full shadow-2xl"
            />
          </div>
          <form>
            <fieldset className="fieldset space-y-2 ">
              <div className="join  w-96">
                <button className="bg-[#8CC63D] join-item w-[100px]">
                  Name
                </button>
                <input
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Your Name"
                  className="input  join-item text-base-300 w-full"
                />
              </div>

              <div className="join relative w-96">
                <button className="bg-[#8CC63D] join-item px-2 w-[100px]">
                  Photo
                </button>
                <input
                  onChange={(e) => setPhotos(e.target.value)}
                  value={photo}
                  name="photo"
                  type="text"
                  placeholder="photo URL"
                  className="input input-bordered join-item text-base-300 w-full"
                />
              </div>

              <button
                onClick={handleUpdate}
                className="btn btn-neutral border-none bg-[#0B9444] p-4"
              >
                Update Now
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </MyContainer>
  );
};

export default UpdateProfile;
