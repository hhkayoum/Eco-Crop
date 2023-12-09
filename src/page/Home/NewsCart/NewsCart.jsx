import { useState } from "react";

/* eslint-disable react/prop-types */
const NewsCart = ({ newsCart }) => {
  const { title, img, date, description } = newsCart;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={img} alt={title} className="w-full h-auto rounded-lg" />
      <h2 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-500 mt-2">{date}</p>
      <p className="text-gray-700 mt-4">
        {isExpanded ? description : description.slice(0, 100) + "..."}
      </p>
      {description.length > 100 && (
        <button
          onClick={toggleExpansion}
          className="px-3 py-1 text-base md:px-5 mt-4 md:py-2 md:text-medium font-semibold  bg-[#F4853A] text-white rounded-br-2xl"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default NewsCart;
