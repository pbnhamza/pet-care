import MyContainer from "../../Components/MyContainer/MyContainer";
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router";
import PetCard from "../../Components/PetCard/PetCard";
import Tips from "../../Components/Tips/Tips";
import Vets from "../../Components/Vets/Vets";
import Video from "../../Components/video/Video";
import Reviews from "../../Components/Reviews/Reviews";
import AllServices from "../../Components/All-Servises/AllServices";
import Promotional from "../../Components/Promotional/Promotional";

const Home = () => {
  return (
    <MyContainer className="bg-[#EEEEEE] ">
      <Banner></Banner>
      <AllServices></AllServices>
      <Tips></Tips>
      <Vets></Vets>
      <Reviews></Reviews>
      <Promotional></Promotional>
      <Video></Video>
    </MyContainer>
  );
};

export default Home;
