import React from "react";

const TipsCart = ({ tips }) => {
  const { title, details, image } = tips;
  return (
    <div>
      <div
        className="  rounded-2xl shadow-sm px-1.5 hover:scale-90  transition"
        style={{
          background:
            "linear-gradient(90deg,rgba(42, 151, 155, 0.5) 0%, rgba(11, 148, 68, 0.25) 50%, rgba(83, 237, 198, 0.45) 100%)",
        }}
      >
        <figure className="pt-1.5">
          <img src={image} alt="pets" className="rounded-xl " />
        </figure>
        <div className="items-center text-center ">
          <h2 className="text-secondary text-xl font-semibold py-1">{title}</h2>
          <div className="bg-white rounded-2xl p-2">
            <p className="text-justify ">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsCart;
