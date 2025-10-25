const VetDrCard = ({ vets }) => {
  const { image, name, specialty, email, phone } = vets;

  return (
    <div className="">
      <div className="  rounded-2xl shadow-lg px-1.5 hover:translate-y-5  transition-transform">
        <div className="">
          <figure className="pt-1.5 ">
            <img src={image} alt="pets" className="rounded-xl " />
          </figure>
        </div>
        <div className="items-center text-center ">
          <h2 className="text-secondary text-xl font-semibold py-1">
            Name: {name}
          </h2>
          <div className="bg-white w-full  py-2">
            <p className="text-center font-semibold ">Specialty: {specialty}</p>
          </div>
          <div className="py-4">
            <h1>E-mail: {email}</h1>
            <h1>Phone: {phone}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetDrCard;
