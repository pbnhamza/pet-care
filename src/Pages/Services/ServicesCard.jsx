import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ServicesCard = ({ card }) => {
  const {
    image,
    serviceName,
    rating,
    price,
    description,
    providerEmail,
    category,
  } = card;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelBookNow = (e) => {
    e.preventDefault();
    if (email && password) {
      toast.success("Book Service Successful");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div
      className="md:px-20 p-4 "
      style={{
        background:
          "linear-gradient(90deg,rgba(46, 177, 101, 0.81) 0%, rgba(138, 195, 62, 0.95) 46%, rgba(46, 177, 101, 0.9) 100%)",
      }}
    >
      <div className=" shadow-lg bg-white justify-between rounded-xl  flex flex-col md:flex-row gap-6  items-center ">
        <div>
          <figure className="flex justify-center items-center w-[300px] h-[300px] ">
            <img className="rounded-xl w-full h-full " src={image} alt="pets" />
          </figure>
        </div>
        <div className="space-y-2">
          <h2 className=" text-left text-xl text-[#10223A] font-bold ">
            <span> Service Name:</span>
            <span className="font-semibold">
              {" "}
              <span className="font-semibold text-accent">{serviceName}</span>
            </span>
          </h2>
          <h1 className=" text-left  font-semibold text-[#10223A]">
            Category: <span className="font-semibold">{category}</span>
          </h1>
          <p className=" text-left  font-semibold text-[#10223A]">
            Description:
            <span className="font-semibold text-accent text-justify">
              {description}
            </span>
          </p>
          <div className="  text-left space-y-2">
            <div className="text-lg font-semibold text-[#10223A]">
              Rating: <span>{rating}</span>
            </div>
            <div className="text-lg font-semibold text-[#10223A">
              Price: <span> ${price}</span>
            </div>
          </div>
          <div className="flex text-[#10223A font-semibold">
            Email:
            <span className="text-left text-accent"> {providerEmail}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-10">
        <form
          onSubmit={handelBookNow}
          className="card  w-full max-w-sm shrink-0 shadow-2xl bg-base-300"
        >
          <div className="card-body">
            <h1 className="text-center text-white font-bold text-2xl py-2">
              Book Service
            </h1>
            <fieldset className="fieldset text-white">
              <label className="label text-white">Email</label>
              <input
                type="email"
                value={email}
                className="input text-base-300 bg-white"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label text-white">Password</label>
              <input
                type="password"
                value={password}
                className="input text-base-300 bg-white"
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn border-none btn-neutral bg-secondary mt-4"
              >
                Book Now
              </button>
            </fieldset>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ServicesCard;
