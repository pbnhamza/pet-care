import React from "react";

const Video = () => {
  return (
    <div
      className="flex flex-col justify-center items-center py-5 w-full 
    "
      style={{
        background:
          "linear-gradient(90deg,rgba(42, 151, 155, 1.51) 0%, rgba(87, 199, 102, 0.17) 50%, rgba(83, 237, 198, 0.51) 100%)",
      }}
    >
      <div>
        <h1 className="text-secondary text-2xl font-semibold py-5">
          Pet Care Video
        </h1>
      </div>
      <iframe
        className="w-full px-10 rounded-lg shadow-2xl"
        width="560"
        height="500"
        src="https://www.youtube.com/embed/ne5VEkRrpw4?si=lOZOnEg4CWBvwBF5"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture;"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
