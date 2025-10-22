import React, { useEffect } from "react";
import { useState } from "react";
import VetDrCard from "./VetDrCard";

const Vets = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    fetch("/vets.json")
      .then((res) => res.json())
      .then((data) => setVets(data));
  }, []);
  return (
    <div
      className="py-5 s "
      style={{
        background:
          "linear-gradient(90deg,rgba(42, 151, 155, 0.51) 0%, rgba(87, 199, 102, 0.07) 50%, rgba(83, 237, 198, 0.12) 50%)",
      }}
    >
      <h1 className="text-secondary py-5  text-3xl font-bold text-center">
        Meet Our Expert Vets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
        {vets.map((vets) => (
          <VetDrCard key={vets.id} vets={vets}></VetDrCard>
        ))}
      </div>
    </div>
  );
};

export default Vets;
