import React from "react";
import MyContainer from "../Components/MyContainer/MyContainer";
import pets from "../../src/assets/pets.jpg";
const About = () => {
  return (
    <MyContainer>
      <div
        className="pt-5"
        style={{
          background:
            "linear-gradient(90deg,rgba(46, 177, 101, 0.61) 0%, rgba(138, 195, 62, 0.55) 46%, rgba(46, 177, 101, 0.18) 100%)",
        }}
      >
        <div>
          <div className=" py-5">
            <h1 className="text-4xl font-semibold text-secondary mb-4 text-center">
              Welcome to pet care
            </h1>
            <div className="flex justify-center">
              <p className="text-accent text-justify px-5 md:px-62 ">
                Pet care is the process of tending to the health, well-being,
                and comfort of domestic animals through providing proper
                nutrition, clean water, safe shelter, and necessary medical
                attention. It also includes regular grooming, sufficient
                exercise, mental stimulation, and training to ensure a pet is
                healthy and lives a long, happy life.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 py-5">
            <img
              className="w-[350px] h-[350px] rounded-2xl shadow-lg"
              src={pets}
              alt=""
            />
            <div className="space-y-4">
              <h1 className="font-bold text-3xl text-secondary">
                About our service
              </h1>
              <p className="text-accent">
                We take complete care of pets. Our services include:
              </p>
              <ul className="text-accent font-semibold space-y-2">
                <li>Housing</li>
                <li>Grooming</li>
                <li>Nutrition and hydration</li>
                <li>Health and medical care</li>
                <li>Training and socialization</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 text-white md:grid-cols-3 lg:grid-cols-3 gap-5 py-5 px-5">
          <div className="p-6 t  bg-[#0B9444] rounded-2xl shadow hover:shadow-lg transition text-center">
            <h2 className="text-xl font-bold mb-2">Expert team</h2>
            <p className="text-white">
              Our experienced vets and technicians are always on hand.
            </p>
          </div>
          <div className="p-6 bg-[#0B9444] rounded-2xl shadow hover:shadow-lg transition text-center">
            <h2 className="text-xl font-bold mb-2">Affordable care</h2>
            <p className="text-white">
              We ensure the best pet care at affordable cost.
            </p>
          </div>
          <div className="p-6 bg-[#0B9444] rounded-2xl shadow-2xl transition text-center">
            <h2 className="text-xl font-bold mb-2">Safe Environment care</h2>
            <p className="text-white">
              Our center is completely safe and clean.
            </p>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default About;
