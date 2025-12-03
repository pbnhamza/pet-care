import { FaStar } from "react-icons/fa6";

const ReviewCard = ({ review }) => {
  const { userName, review: command, delivery_email, ratings } = review;

  return (
    <div className="">
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl mx-auto font-sans ">
        {/* Quote Icon */}
        <div className="text-5xl text-teal-600 mb-4">“</div>
        {/* Testimonial Text */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
          {command}
        </p>
        <div className="flex items-center gap-5 py-4">
          <p className="text-gray-700 text-lg leading-relaxed  italic">
            Ratings: {ratings}
          </p>
          <span className="flex items-center gap-1">
            <FaStar className="text-[#FFB600]" />
            <FaStar className="text-[#FFB600]" />
            <FaStar className="text-[#FFB600]" />
            <FaStar className="text-[#FFB600]" />
          </span>
        </div>

        {/* Dashed Line Separator */}
        <div className="border-t-2 border-dashed border-gray-300 mb-6"></div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-12 h-12 bg-teal-700 rounded-full flex-shrink-0"></div>

          {/* Name & Title */}
          <div>
            <h4 className="font-bold text-gray-800">{userName}</h4>
            <p className="text-sm text-gray-500">{delivery_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
