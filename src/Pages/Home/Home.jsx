import MyContainer from "../../Components/MyContainer/MyContainer";
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router";
import PetCard from "../../Components/PetCard/PetCard";
import Tips from "../../Components/Tips/Tips";
import Vets from "../../Components/Vets/Vets";

const Home = () => {
  const allPets = useLoaderData();

  return (
    <MyContainer className="bg-[#EEEEEE]">
      <Banner></Banner>
      <div className="pt-10 bg-base-200">
        <div>
          <h1 className="text-secondary text-3xl font-semibold text-center">
            Popular Winter Care Services
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10 px-5">
          {allPets.map((pet) => (
            <PetCard key={pet.serviceId} pet={pet}></PetCard>
          ))}
        </div>
      </div>
      <Tips></Tips>
      <Vets></Vets>
    </MyContainer>
  );
};

export default Home;
