import React from "react";
import { useLoaderData } from "react-router";
import PetCard from "../PetCard/PetCard";

const AllServices = () => {
  const allPets = useLoaderData();
  return (
    <div className="pt-10 bg-base-200">
      <div>
        <h1 className="text-secondary text-3xl font-semibold text-center">
          Popular Winter Care Services
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10 px-5">
        {allPets.map((pet) => (
          <PetCard key={pet.serviceId} pet={pet}></PetCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
