import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { FaStar } from "react-icons/fa6";

const PetCard = ({ pet }) => {
  const { image, serviceName, rating, price, serviceId } = pet;

  return (
    <div>
      <div className=" shadow-sm p-2 rounded-xl space-y-4 hover:scale-105 transition ease-in-out">
        <figure className=" h-[200px] w-full ">
          <img className="rounded-xl w-full h-full " src={image} alt="pets" />
        </figure>
        <div className=" w-full">
          <h2 className=" text-center text-2xl font-semibold py-2">
            {serviceName}
          </h2>

          <div className="">
            <div className="text-lg font-semibold text-accent">
              Price: <span>${price}</span>
            </div>
            <div className="flex gap-5 items-center text-lg font-semibold text-accent">
              <span>Rating: {rating} </span>
              <span className="flex items-center">
                <FaStar color="#FFB600" />
                <FaStar color="#FFB600" />
                <FaStar color="#FFB600" />
                <FaStar color="#FFB600" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <NavLink
            to={`/services/${serviceId}`}
            className="btn rounded-b-2xl w-full bg-secondary text-white"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
