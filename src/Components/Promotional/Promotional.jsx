import React from "react";
const promotions = [
  {
    id: 1,
    title: "Winter Special Grooming",
    description: "Get 30% off on all pet grooming services this winter!",
    image: "https://i.ibb.co.com/gLZSbPzr/Pet-Massage-Therapy.jpg",
    buttonText: "Book Now",
    link: "#",
  },
  {
    id: 2,
    title: "Free Checkup Week",
    description:
      "Bring your pet for a free health checkup during our special promo week.",
    image: "https://i.ibb.co.com/209JqPqj/Cat-Dental-Cleaning.jpg",
    buttonText: "Learn More",
    link: "#",
  },
];

const Promotional = () => {
  return (
    <div className="py-5 px-5 md:px-20 bg-green-50 ">
      <h2 className="text-3xl font-bold text-center text-[#0B9444] mb-10">
        Special Promotions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="relative rounded-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="w-full h-64 object-cover blur-xs "
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white  p-5">
              <h3 className="text-3xl  font-bold mb-2">{promo.title}</h3>
              <p className="mb-4">{promo.description}</p>
              <a
                href={promo.link}
                className="bg-green-700 px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition-colors"
              >
                {promo.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotional;
