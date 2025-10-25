import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const PetCard = ({ pet }) => {
  const { image, serviceName, rating, price, serviceId } = pet;
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className=" shadow-sm p-2 rounded-xl space-y-4 hover:scale-105 transition ease-in-out">
        <figure className=" h-[300px]">
          <img className="rounded-xl w-full h-full " src={image} alt="pets" />
        </figure>
        <div className="">
          <h2 className=" text-center text-2xl font-semibold py-2">
            {serviceName}
          </h2>

          <div className="flex justify-between items-center px-5">
            <div className="text-lg font-semibold text-accent">
              Price: <span>${price}</span>
            </div>
            <div className="text-lg font-semibold text-accent">
              Rating:{rating}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <NavLink
            to={user ? `/services/${serviceId}` : "/login"}
            className="btn  bg-secondary text-white"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
