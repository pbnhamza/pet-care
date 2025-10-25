import { Link, useLoaderData, useParams } from "react-router";
import MyContainer from "../../Components/MyContainer/MyContainer";
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { PropagateLoader } from "react-spinners";

const Services = () => {
  const { id } = useParams();
  const petsCard = useLoaderData();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const petCard = petsCard.filter((card) => String(card.serviceId) === id);
    setCards(petCard);
  }, [id, petsCard]);

  return (
    <MyContainer>
      <div
        style={{
          background:
            "linear-gradient(90deg,rgba(42, 151, 155, 0.5) 0%, rgba(11, 148, 68, 0.25) 60%, rgba(83, 237, 198, 0.45) 100%)",
        }}
      >
        {cards.length === 0 ? (
          <div className="flex justify-center items-center min-h-screen ">
            <div>
              <PropagateLoader
                className="text-center py-8"
                color=" #0b9444"
              ></PropagateLoader>
              <Link
                to={"/"}
                className="text-secondary font-bold  text-xl md:text-4xl mt-10 cursor-pointer hover:border-b"
              >
                Please Click the view details Button
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {cards.map((card) => (
              <ServicesCard key={card.serviceId} card={card}></ServicesCard>
            ))}
          </div>
        )}
      </div>
    </MyContainer>
  );
};

export default Services;
