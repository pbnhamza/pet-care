import { useEffect, useState } from "react";
import TipsCart from "./TipsCart";

const Tips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("/tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);
  return (
    <div
      className="py-5"
      style={{
        background:
          "linear-gradient(180deg,rgba(42, 151, 155, 0.15) 0%, rgba(11, 148, 68, 0.25) 60%, rgba(83, 237, 198, 0.45) 100%)",
      }}
    >
      <h1 className="text-secondary py-5  text-3xl font-bold text-center">
        Winter Care Tips for Pets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-5">
        {tips.map((tips) => (
          <TipsCart key={tips.id} tips={tips}></TipsCart>
        ))}
      </div>
    </div>
  );
};

export default Tips;
